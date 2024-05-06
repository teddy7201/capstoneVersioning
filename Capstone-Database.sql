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

INSERT INTO games
	(games_id, player_name, player_score, game_date)
VALUES
    (DEFAULT, 'Stoney', 400, '2024-04-25'),
    (DEFAULT, 'Zeus', 300, '2024-04-26'),
    (DEFAULT, 'Poseidon', 500, '2024-04-27'),
    (DEFAULT, 'Demeter', 500, '2024-04-27'),
    (DEFAULT, 'Ares', 200, '2024-04-22'),
    (DEFAULT, 'Apollo', 100, '2024-04-21'),
    (DEFAULT, 'Apollo', 700, '2024-04-14'),
    (DEFAULT, 'Athena', 1000, '2024-04-03'),
    (DEFAULT, 'Athena', 1200, '2024-04-06'),
    (DEFAULT, 'Percy', 400, '2024-04-23'),
    (DEFAULT, 'Storm', 300, '2024-05-02'),
    (DEFAULT, 'Lead', 100, '2024-05-01'),
    (DEFAULT, 'Ice', 600, '2024-05-01'),
    (DEFAULT, 'Hydro', 700, '2024-05-03'),
    (DEFAULT, 'Ion', 200, '2024-05-03'),
    (DEFAULT, 'Eon', 1100, '2024-05-03'),
    (DEFAULT, 'Golem', 1000, '2024-05-02'),
    (DEFAULT, 'Hen', 300, '2024-05-01'),
    (DEFAULT, 'Flask', 200, '2024-04-30'),
    (DEFAULT, 'Fire', 800, '2024-05-04'),
    (DEFAULT, 'Manny', 0, '2024-05-03'),
    (DEFAULT, 'Hudson', 400, '2024-05-05'),
    (DEFAULT, 'Mason', 900, '2024-05-05');
