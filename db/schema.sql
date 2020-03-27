DROP DATABASE IF EXISTS c2otzsk5wz6lu5mu;
CREATE DATABASE c2otzsk5wz6lu5mu;
USE c2otzsk5wz6lu5mu;


CREATE TABLE burger (
    id int NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(100) NOT NULL,
    isDevoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM burger;