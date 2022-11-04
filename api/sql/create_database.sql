CREATE DATABASE IF NOT EXISTS company;
CREATE TABLE IF NOT EXISTS company.employee(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  CPF VARCHAR(11) NOT NULL,
  birthdate DATE NOT NULL,
  gender ENUM(1, 2) NOT NULL,
  startdate DATE NOT NULL,
  team ENUM(1, 2, 3)
);