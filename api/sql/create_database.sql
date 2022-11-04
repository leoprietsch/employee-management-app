CREATE DATABASE IF NOT EXISTS company;
CREATE TABLE IF NOT EXISTS company.employee(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  CPF VARCHAR(11) NOT NULL,
  birthdate DATE NOT NULL,
  gender TINYINT NOT NULL,
  startdate DATE NOT NULL,
  team TINYINT DEFAULT NULL
);