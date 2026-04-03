const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

async function testGmailConnection() {
  console.log('🔍 Gmail Connection Test - Kapital Corp');
  console.log('=======================================');
  console.log(`📧 Testing email: ${process.env.EMAIL_USER}`);
  console.log(`🔑 Password length: ${process.env.EMAIL_PASSWORD?.length || 0} characters`);
  console.log(`📬 Notification email: ${process.env.NOTIFICATION_EMAIL}`);
  console.log('=======================================\n');
  
  // Check if credentials are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('❌ Missing email credentials in .env file');
    console.log('\nRequired .env variables:');
    console.log('EMAIL_USER=your-gmail@gmail.com');
    console.log('EMAIL_PASSWORD=your-16-char-app-password');
    console.log('NOTIFICATION_EMAIL=recipient@gmail.com');
    return false;
  }
  
  // Check App Password format
  if (process.env.EMAIL_PASSWORD.length !== 16) {
    console.warn('⚠️ Gmail App Password should be exactly 16 characters');
    console.log('Current password length:', process.env.EMAIL_PASSWORD.length);
    console.log('Make sure to remove all spaces from the App Password');
  }
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    debug: true,
    logger: false // Disable verbose logging for cleaner output
  });
  
  try {
    console.log('🔌 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');
    
    console.log('📤 Sending test email...');
    const testEmailContent = {
      from: `"Kapital Corp Test" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: '✅ Gmail Configuration Test - Kapital Corp',
      text: `Gmail configuration test successful!
      
Timestamp: ${new Date().toLocaleString()}
Server: Kapital Corp Backend
Status: All systems operational

If you receive this email, your Gmail App Password is working correctly.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #EA0029; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">✅ Gmail Test Successful</h1>
            <p style="margin: 5px 0 0 0;">Kapital Corp Server</p>
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #EA0029;">Configuration Test Results</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5;"><strong>Timestamp:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5;"><strong>Email Service:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">Gmail SMTP</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5;"><strong>Authentication:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">App Password ✅</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5;"><strong>Server Status:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">All systems operational</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-left: 4px solid #4CAF50;">
              <p style="margin: 0;"><strong>Success!</strong> Your Gmail App Password is working correctly. The contact form email system is ready to use.</p>
            </div>
          </div>
          <div style="background-color: #333; color: #ccc; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This is an automated test email from the Kapital Corp server.</p>
          </div>
        </div>
      `
    };
    
    const info = await transporter.sendMail(testEmailContent);
    
    console.log('✅ Test email sent successfully!');
    console.log(`📧 Message ID: ${info.messageId}`);
    console.log(`📬 Email sent to: ${process.env.NOTIFICATION_EMAIL}`);
    
    return true;
  } catch (error) {
    console.error('❌ Test failed:');
    console.error(`Error: ${error.message}\n`);
    
    // Specific troubleshooting based on error type
    if (error.code === 'EAUTH') {
      console.log('🔐 Authentication Problem');
      console.log('========================');
      console.log('Your Gmail App Password is not working. Here\'s how to fix it:');
      console.log('');
      console.log('1. Go to: https://myaccount.google.com/apppasswords');
      console.log('2. Delete any existing "Kapital Corp" or "Mail" app passwords');
      console.log('3. Create a NEW App Password:');
      console.log('   - Select app: "Mail"');
      console.log('   - Select device: "Other (custom name)"');
      console.log('   - Enter name: "Kapital Corp Server"');
      console.log('4. Copy the 16-character password (like: "abcd efgh ijkl mnop")');
      console.log('5. Remove ALL spaces: "abcd efgh ijkl mnop" → "abcdefghijklmnop"');
      console.log('6. Update your .env file with: EMAIL_PASSWORD=abcdefghijklmnop');
      console.log('');
      console.log('📋 Checklist:');
      console.log('□ 2-Step Verification is enabled on your Google account');
      console.log('□ Generated a NEW App Password specifically for this server');
      console.log('□ Removed all spaces from the App Password');
      console.log('□ Updated .env file with the correct password');
      console.log('□ Restarted the server after updating .env');
      
    } else if (error.code === 'ESOCKET' || error.code === 'ETIMEDOUT') {
      console.log('🌐 Network Connection Issues');
      console.log('===========================');
      console.log('1. Check your internet connection');
      console.log('2. Some networks/firewalls block SMTP connections');
      console.log('3. Try connecting to a different network');
      console.log('4. If using a corporate network, contact your IT department');
      
    } else if (error.code === 'EDNS') {
      console.log('🔍 DNS Resolution Issues');
      console.log('========================');
      console.log('1. Check your internet connection');
      console.log('2. Try changing your DNS servers to:');
      console.log('   - 8.8.8.8 (Google)');
      console.log('   - 1.1.1.1 (Cloudflare)');
    }
    
    console.log('\n💡 Quick Fixes to Try:');
    console.log('1. Generate a fresh App Password');
    console.log('2. Double-check the .env file has no extra spaces');
    console.log('3. Restart your server after updating .env');
    console.log('4. Try running this test from a different network');
    
    return false;
  }
}

// Helper function to validate .env configuration
function validateConfig() {
  console.log('🔍 Validating .env Configuration');
  console.log('================================');
  
  const required = ['EMAIL_USER', 'EMAIL_PASSWORD', 'NOTIFICATION_EMAIL'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(key => console.error(`   - ${key}`));
    return false;
  }
  
  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(process.env.EMAIL_USER)) {
    console.error('❌ EMAIL_USER is not a valid email address');
    return false;
  }
  
  if (!emailRegex.test(process.env.NOTIFICATION_EMAIL)) {
    console.error('❌ NOTIFICATION_EMAIL is not a valid email address');
    return false;
  }
  
  // Check password length
  if (process.env.EMAIL_PASSWORD.length !== 16) {
    console.warn('⚠️ EMAIL_PASSWORD should be exactly 16 characters (Gmail App Password)');
  }
  
  console.log('✅ All required environment variables are set');
  return true;
}

// Run the test
async function runTest() {
  if (!validateConfig()) {
    process.exit(1);
  }
  
  const success = await testGmailConnection();
  
  if (success) {
    console.log('\n🎉 SUCCESS! Gmail configuration is working perfectly!');
    console.log('Your server is ready to send contact form emails.');
    console.log('\nNext steps:');
    console.log('1. Start your server: node server.js');
    console.log('2. Test the contact form on your website');
    console.log('3. Check that both admin and user emails are received');
  } else {
    console.log('\n❌ Gmail configuration test failed.');
    console.log('Please follow the troubleshooting steps above and try again.');
    console.log('\nFor additional help, check: https://support.google.com/accounts/answer/185833');
  }
}

runTest().catch(console.error);