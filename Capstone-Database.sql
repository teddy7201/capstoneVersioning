-- -----------------------------------------------------
-- Schema CapstoneHockeyV2
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `CapstoneHockeyV2`;
CREATE DATABASE `CapstoneHockeyV2`;
USE `CapstoneHockeyV2` ;

-- -----------------------------------------------------
-- Table `CapstoneHockeyV2`.`games`
-- -----------------------------------------------------
CREATE TABLE `CapstoneHockeyV2`.`games` (
  `games_id` INT NOT NULL AUTO_INCREMENT,
  `player_name` VARCHAR(45) NULL,
  `player_score` INT NULL,
  `game_date` DATE NULL,
  PRIMARY KEY (`games_id`))
ENGINE = InnoDB;
