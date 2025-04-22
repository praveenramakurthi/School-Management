require('dotenv').config();
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
// console.log("User:", process.env.DB_USER);
// console.log("Pass:", process.env.DB_PASS);

connection.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  } 
  console.log('Connected to MySQL database');
});

module.exports = connection;
