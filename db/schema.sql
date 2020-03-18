DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;


CREATE TABLE burger (
    id int NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM burger;