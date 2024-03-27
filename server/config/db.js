const mysql = require('mysql');

// Create MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust as needed
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'hospital_management',
});

// Function to execute SQL queries
const query = (sql, params) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, results) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = { query };
