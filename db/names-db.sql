-- DROP DATABASE IF EXISTS technical_test;   
-- CREATE DATABASE IF NOT EXISTS technical_test; 

USE technical_test; 

DROP TABLE IF EXISTS names; 

CREATE TABLE IF NOT EXISTS names 
  ( 
 
     first_name VARCHAR(50) NOT NULL, 
     last_name  VARCHAR(50) NOT NULL

  )