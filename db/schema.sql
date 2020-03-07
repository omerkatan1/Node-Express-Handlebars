CREATE DATABASE burger_db;

USE burger_db;


CREATE TABLE notDevoured (
    id int NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);