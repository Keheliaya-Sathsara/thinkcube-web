// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Update CORS configuration to be more specific
app.use(
  cors({
    origin: ['http://localhost:4200', 'https://your-production-domain.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);
app.use(bodyParser.json());

// Database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'kapitalcorp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
});

// Test database connection and create table if needed
async function testDbConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Database connection successful');

    // Check if contact_form table exists
    const [tables] = await connection.query(
      `
      SELECT * 
      FROM information_schema.tables
      WHERE table_schema = ? 
      AND table_name = 'contact_form'
    `,
      [process.env.DB_NAME],
    );

    if (tables.length === 0) {
      console.log('📝 Creating contact_form table...');
      await connection.query(`
        CREATE TABLE contact_form (
          id INT AUTO_INCREMENT PRIMARY KEY,
          full_name VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL,
          phone VARCHAR(50),
          message TEXT NOT NULL,
          agreed_to_terms BOOLEAN NOT NULL DEFAULT 0,
          submission_date DATETIME NOT NULL,
          INDEX idx_email (email),
          INDEX idx_submission_date (submission_date)
        )
      `);
      console.log('✅ contact_form table created successfully');
    } else {
      console.log('✅ contact_form table already exists');
    }

    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('Please check your database configuration in .env file');
    console.error('Make sure MySQL is running and credentials are correct');
    return false;
  }
}

// Create email transporter
const createTransporter = () => {
  const config = {
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  };

  // Add debug logging if in test mode
  if (process.env.EMAIL_TEST_MODE === 'true') {
    config.debug = true;
    config.logger = true;
  }

  const transporter = nodemailer.createTransport(config);

  if (process.env.EMAIL_TEST_MODE === 'true') {
    console.log(`📧 Email Configuration:
- Service: ${process.env.EMAIL_SERVICE}
- User: ${process.env.EMAIL_USER}
- Password: ${process.env.EMAIL_PASSWORD ? '[SET]' : '[NOT SET]'}
- TLS: Enabled
- Debug: ${config.debug ? 'Enabled' : 'Disabled'}`);
  }

  return transporter;
};

// Test email configuration
async function testEmailConfig() {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.warn('⚠️ Email credentials not properly configured');
      return false;
    }

    const transporter = createTransporter();
    console.log('🔍 Testing email configuration...');

    await transporter.verify();
    console.log('✅ Email configuration verified successfully');

    // Send test email only in development mode
    if (process.env.EMAIL_TEST_MODE === 'true' && process.env.NODE_ENV !== 'production') {
      try {
        const info = await transporter.sendMail({
          from: `"Kapital Corp" <info@kapital.lk>`,
          to: process.env.NOTIFICATION_EMAIL,
          subject: 'Email System Test - Kapital Corp',
          text: 'This is a test email to verify the email configuration is working correctly.',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #EA0029;">Email System Test</h2>
              <p>This is a test email to verify the email configuration is working correctly.</p>
              <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
              <p><em>This email was sent from the Kapital Corp server startup process.</em></p>
            </div>
          `,
        });
        console.log('✅ Test email sent successfully:', info.messageId);
      } catch (emailError) {
        console.warn('⚠️ Test email failed but configuration is valid:', emailError.message);
      }
    }

    return true;
  } catch (error) {
    console.error('❌ Email configuration failed:', error.message);

    // Provide specific troubleshooting advice
    if (error.code === 'EAUTH') {
      console.error(`
📧 Gmail Authentication Troubleshooting:
1. Verify your Gmail address: ${process.env.EMAIL_USER}
2. For Gmail with 2FA (recommended):
   - Use an App Password instead of your regular Gmail password
   - Generate at: https://myaccount.google.com/apppasswords
   - Current password format looks like: ${process.env.EMAIL_PASSWORD?.replace(/./g, '*')}
3. Ensure the App Password is entered without spaces
4. Check that 2FA is enabled on your Google account`);
    } else if (error.code === 'ESOCKET') {
      console.error(`
📡 Network Connection Issues:
1. Check internet connection
2. Some networks block SMTP connections
3. Try different network or check firewall settings`);
    }

    return false;
  }
}

// Format email content
const createFormDataTable = (data) => {
  return `
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; background-color: #f9f9f9; border-radius: 5px; overflow: hidden;">
      <tr>
        <th style="padding: 12px 15px; text-align: left; background-color: #EA0029; color: white; font-size: 16px;" colspan="2">
          Contact Form Details
        </th>
      </tr>
      <tr>
        <td style="padding: 10px 15px; width: 150px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Full Name:</td>
        <td style="padding: 10px 15px; border-bottom: 1px solid #ddd;">${data.fullName}</td>
      </tr>
      <tr>
        <td style="padding: 10px 15px; width: 150px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Email:</td>
        <td style="padding: 10px 15px; border-bottom: 1px solid #ddd;">${data.email}</td>
      </tr>
      <tr>
        <td style="padding: 10px 15px; width: 150px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Phone:</td>
        <td style="padding: 10px 15px; border-bottom: 1px solid #ddd;">${data.phone}</td>
      </tr>
      <tr>
        <td style="padding: 10px 15px; width: 150px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Submission ID:</td>
        <td style="padding: 10px 15px; border-bottom: 1px solid #ddd;">#${data.id}</td>
      </tr>
      <tr>
        <td style="padding: 10px 15px; width: 150px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Terms Agreed:</td>
        <td style="padding: 10px 15px; border-bottom: 1px solid #ddd;">${data.agreeTerms}</td>
      </tr>
      <tr style="border-bottom: none;">
        <td style="padding: 10px 15px; width: 150px; font-weight: bold; background-color: #f5f5f5;">Submitted:</td>
        <td style="padding: 10px 15px;">${data.date}</td>
      </tr>
    </table>
  `;
};

const formatMessage = (msg) => {
  return `
    <div style="background-color: white; padding: 15px; border-left: 4px solid #EA0029; margin-top: 15px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${msg.replace(
        /\n/g,
        '<br>',
      )}</p>
    </div>
  `;
};

// Main contact form handler
app.post('/contact', async (req, res) => {
  const { fullName, email, selectedCountry, phoneNumber, message, agreeTerms } = req.body;

  // Validate required fields
  if (!fullName || !email || !message || !agreeTerms) {
    return res.status(400).json({
      success: false,
      message: 'Please fill all required fields and agree to terms',
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid email address',
    });
  }

  let connection;

  try {
    // Format phone number
    const formattedPhone = phoneNumber ? `${selectedCountry} ${phoneNumber}` : 'Not provided';

    // Save to database
    connection = await pool.getConnection();
    const [result] = await connection.execute(
      'INSERT INTO contact_form (full_name, email, phone, message, agreed_to_terms, submission_date) VALUES (?, ?, ?, ?, ?, NOW())',
      [fullName, email, formattedPhone, message, agreeTerms ? 1 : 0],
    );

    const insertId = result.insertId;
    console.log(`✅ Contact form saved to database with ID: ${insertId}`);

    // Prepare email data
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-LK', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Colombo',
    });

    const emailData = {
      fullName,
      email,
      phone: formattedPhone,
      id: insertId,
      agreeTerms: agreeTerms ? 'Yes' : 'No',
      date: formattedDate,
    };

    // Create transporter
    const transporter = createTransporter();

    // Admin notification email
    const adminEmailSubject = `New Inquiry - ${fullName} - Kapital Corp`;
    const adminMailOptions = {
      from: `"Kapital Corp" <info@kapital.lk>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: adminEmailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background-color: #EA0029; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Kapital Corp Website</p>
          </div>
          
          <div style="padding: 30px 20px; background-color: #f9f9f9;">
            ${createFormDataTable(emailData)}
            
            <div style="margin-top: 25px;">
              <h3 style="color: #EA0029; margin-bottom: 10px; font-size: 18px;">Message:</h3>
              ${formatMessage(message)}
            </div>
          </div>
          
          <div style="background-color: #333; color: #ccc; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This is an automated notification from the Kapital Corp website contact form.</p>
            <p style="margin: 5px 0 0 0;">Submission ID: #${insertId} | ${formattedDate}</p>
          </div>
        </div>
      `,
    };

    // User confirmation email
    const userEmailSubject = 'Thank you for contacting Kapital Corp';
    const userMailOptions = {
      from: `"Kapital Corp" <info@kapital.lk>`,
      to: email,
      subject: userEmailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background-color: #EA0029; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Reaching Out</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">We'll be in touch soon</p>
          </div>
          
          <div style="padding: 30px 20px; background-color: #f9f9f9;">
            <p style="font-size: 16px; margin-bottom: 20px;">Dear ${fullName},</p>
            <p style="margin-bottom: 20px;">Thank you for contacting Kapital Corp. We have received your message and will get back to you within 24-48 hours. Here's a summary of your submission:</p>
            
            ${createFormDataTable(emailData)}
            
            <div style="margin-top: 25px;">
              <h3 style="color: #EA0029; margin-bottom: 10px; font-size: 18px;">Your Message:</h3>
              ${formatMessage(message)}
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background-color: #e8f4fd; border-left: 4px solid #2196F3; border-radius: 4px;">
              <p style="margin: 0; font-size: 14px;"><strong>Note:</strong> Please keep this email for your records. Your submission ID is <strong>#${insertId}</strong></p>
            </div>
          </div>
          
          <div style="padding: 20px; text-align: center;">
            <p style="margin: 0 0 10px 0;">Best regards,</p>
            <p style="margin: 0; font-weight: bold; color: #EA0029;">The Kapital Corp Team</p>
          </div>
          
          <div style="background-color: #333; color: #ccc; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This is an automated confirmation email from Kapital Corp.</p>
            <p style="margin: 5px 0 0 0;">If you didn't submit this form, please contact us immediately.</p>
          </div>
        </div>
      `,
    };

    // Send emails
    console.log('📧 Sending notification emails...');

    const emailPromises = [
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ];

    await Promise.all(emailPromises);

    console.log('✅ All emails sent successfully');

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.',
      submissionId: insertId,
    });
  } catch (error) {
    console.error('❌ Error processing contact form:', error);

    // Determine error type and response
    let errorMessage = 'Failed to submit form. Please try again later.';
    let statusCode = 500;

    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('Database access denied - check credentials');
      errorMessage = 'Database connection error. Please try again later.';
    } else if (error.code === 'EAUTH') {
      console.error('Email authentication failed');
      errorMessage =
        'Email system temporarily unavailable. Your message was saved and we will contact you soon.';
    } else if (error.code === 'ETIMEDOUT' || error.code === 'ECONNREFUSED') {
      console.error('Connection timeout or refused');
      errorMessage = 'Service temporarily unavailable. Please try again in a few minutes.';
      statusCode = 503;
    }

    res.status(statusCode).json({
      success: false,
      message: errorMessage,
      ...(process.env.EMAIL_TEST_MODE === 'true' && { error: error.message }),
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    connection.release();

    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: 'connected',
      server: 'running',
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      database: 'disconnected',
      error: error.message,
    });
  }
});

// Get contact form submissions (for admin use)
app.get('/api/contacts', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      'SELECT id, full_name, email, phone, message, agreed_to_terms, submission_date FROM contact_form ORDER BY submission_date DESC LIMIT 50',
    );
    connection.release();

    res.status(200).json({
      success: true,
      data: rows,
      count: rows.length,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
    });
  }
});

// Add this at the top of your error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);

  // Log to file
  const errorLog = {
    timestamp: new Date().toISOString(),
    url: req.originalUrl,
    method: req.method,
    body: req.body,
    error: error.message,
    stack: error.stack,
  };

  fs.appendFile('error.log', JSON.stringify(errorLog) + '\n', (err) => {
    if (err) console.error('Failed to write to error log:', err);
  });

  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
  });
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('🔄 Received SIGTERM, shutting down gracefully...');
  await pool.end();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('🔄 Received SIGINT, shutting down gracefully...');
  await pool.end();
  process.exit(0);
});

// Start server
async function startServer() {
  console.log('🚀 Starting Kapital Corp Server...');
  console.log('=====================================');

  const dbConnected = await testDbConnection();
  if (!dbConnected) {
    console.error('❌ Cannot start server without database connection');
    process.exit(1);
  }

  const emailConfigValid = await testEmailConfig();
  if (!emailConfigValid) {
    console.warn(
      '⚠️ Warning: Email configuration issues detected. Form submissions will be stored but email notifications may fail.',
    );
  }

  app.listen(PORT, () => {
    console.log('=====================================');
    console.log(`✅ Server running successfully on port ${PORT}`);
    console.log(`🌐 API Base URL: http://localhost:${PORT}`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`📧 Contact Form: POST http://localhost:${PORT}/contact`);
    console.log(`📋 Admin Contacts: GET http://localhost:${PORT}/api/contacts`);
    console.log('=====================================');

    if (process.env.EMAIL_TEST_MODE === 'true') {
      console.log('🧪 Running in EMAIL TEST MODE');
    }
  });
}

startServer();