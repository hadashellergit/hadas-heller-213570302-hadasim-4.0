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
/*
DELIMITER //
CREATE TRIGGER before_vaccination_insert
BEFORE INSERT ON vaccination
FOR EACH ROW
BEGIN
    DECLARE member_vaccination_count INT;
    
    -- Get the count of existing vaccination records for the member
    SELECT COUNT(*) INTO member_vaccination_count
    FROM vaccination
    WHERE member_id = NEW.member_id;
    
    -- Raise an error if the count exceeds four
    IF member_vaccination_count >= 4 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot insert more than four vaccinations for a member';
    END IF;
END //
DELIMITER ;*/