// setup-db.js
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  multipleStatements: true
};

const dbName = process.env.DB_NAME || 'kapitalcorp';

async function setupDatabase() {
  console.log('🚀 Starting database setup...');
  
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    console.log(`Checking if database '${dbName}' exists...`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    console.log(`Database '${dbName}' is ready.`);
    
    await connection.query(`USE ${dbName}`);
    
    console.log('Creating contact_form table if not exists...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_form (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(50),
        message TEXT NOT NULL,
        agreed_to_terms BOOLEAN NOT NULL DEFAULT 0,
        submission_date DATETIME NOT NULL
      )
    `);
    console.log('Database tables are ready.');
    
    console.log('Adding sample data...');
    await connection.query(`
      INSERT INTO contact_form 
        (full_name, email, phone, message, agreed_to_terms, submission_date) 
      VALUES 
        ('Test User', 'test@example.com', '+1 555-1234', 'This is a test message', 1, NOW())
      ON DUPLICATE KEY UPDATE full_name = full_name;
    `);
    
    const [rows] = await connection.query(`SHOW TABLES`);
    console.log('Tables in database:');
    rows.forEach(row => {
      console.log(`- ${row[`Tables_in_${dbName}`]}`);
    });
    
    const [contacts] = await connection.query(`SELECT * FROM contact_form LIMIT 5`);
    console.log('Sample data:');
    console.log(contacts);
    
    await connection.end();
    console.log('✅ Database setup completed successfully!');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.error('Please check your database configuration in .env file');
    process.exit(1);
  }
}

setupDatabase();