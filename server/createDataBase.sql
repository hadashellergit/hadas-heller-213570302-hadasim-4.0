-- Create database if not exists
CREATE DATABASE IF NOT EXISTS hospital_management;

-- Use the hospital_management database
USE hospital_management;

-- Create PersonalData table
CREATE TABLE IF NOT EXISTS PersonalData (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    city VARCHAR(100),
    street VARCHAR(100),
    street_number VARCHAR(10),
    birth_date DATE,
    phone VARCHAR(20),
    mobile_phone VARCHAR(20)
);

-- Create CoronaData table
CREATE TABLE IF NOT EXISTS CoronaData (
    member_id INT  PRIMARY KEY,
    positive_test_date DATE,
    recovery_date DATE,
    FOREIGN KEY (member_id) REFERENCES PersonalData(id)
);

-- Create Vaccinations table
CREATE TABLE IF NOT EXISTS Vaccinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    vaccination_date DATE,
    vaccination_type VARCHAR(50),
    FOREIGN KEY (member_id) REFERENCES PersonalData(id)
);

/*this is not completely necessary*/
DELIMITER //
CREATE TRIGGER before_vaccination_insert
BEFORE INSERT ON vaccination
FOR EACH ROW
BEGIN
    DECLARE member_vaccination_count INT;
    
    SELECT COUNT(*) INTO member_vaccination_count
    FROM vaccination
    WHERE member_id = NEW.member_id;

    IF member_vaccination_count >= 4 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot insert more than four vaccinations for a member';
    END IF;
END //
DELIMITER ;