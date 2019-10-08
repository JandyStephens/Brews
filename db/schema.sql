CREATE DATABASE brews_db;
USE brews_db;

CREATE TABLE beers(
    id INT NOT NULL AUTO_INCREMENT,
    beer_name VARCHAR(25) NOT NULL,
    quaffed BOOL DEFAULT 0,
    PRIMARY KEY(id)
)