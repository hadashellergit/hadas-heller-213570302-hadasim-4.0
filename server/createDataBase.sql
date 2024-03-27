-- Create database if not exists
CREATE DATABASE IF NOT EXISTS hospital_management;

-- Use the hospital_management database
USE hospital_management;

-- Create schema if not exists
CREATE SCHEMA IF NOT EXISTS hospital_management;

-- -----------------------------------------------------
-- Table `personaldata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `personaldata`;

CREATE TABLE IF NOT EXISTS `personaldata` (
  `id` INT NOT NULL,
  `first_name` VARCHAR(50) NULL DEFAULT NULL,
  `last_name` VARCHAR(50) NULL DEFAULT NULL,
  `city` VARCHAR(100) NULL DEFAULT NULL,
  `street` VARCHAR(100) NULL DEFAULT NULL,
  `street_number` VARCHAR(10) NULL DEFAULT NULL,
  `birth_date` DATE NULL DEFAULT NULL,
  `phone` VARCHAR(20) NULL DEFAULT NULL,
  `mobile_phone` VARCHAR(20) NULL DEFAULT NULL,
  `image_data` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `coronadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `coronadata`;

CREATE TABLE IF NOT EXISTS `coronadata` (
  `member_id` INT NOT NULL,
  `positive_test_date` DATE NULL DEFAULT NULL,
  `recovery_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  CONSTRAINT `coronadata_ibfk_1`
    FOREIGN KEY (`member_id`)
    REFERENCES `personaldata` (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `vaccinations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `vaccinations`;

CREATE TABLE IF NOT EXISTS `vaccinations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member_id` INT NULL DEFAULT NULL,
  `vaccination_date` DATE NULL DEFAULT NULL,
  `vaccination_type` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `member_id` (`member_id` ASC) VISIBL
