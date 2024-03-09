CREATE DATABASE autok
COLLATE utf8_hungarian_ci
DEFAULT CHARACTER SET UTF8;

USE autok;

CREATE TABLE users (
    userID int PRIMARY KEY AUTO_INRECEMENT,
    name varchar(100),
    email varchar(100),
    password varchar(100)
);

CREATE TABLE cars (
    carID int PRIMARY KEY AUTO_INRECEMENT,
    brand varchar(100),
    modell varchar(100)
);
