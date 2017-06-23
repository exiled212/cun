-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cun_test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cun_test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cun_test` DEFAULT CHARACTER SET latin1 ;
USE `cun_test` ;

-- -----------------------------------------------------
-- Table `cun_test`.`admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cun_test`.`admin` ;

CREATE TABLE IF NOT EXISTS `cun_test`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NULL,
  `status` VARCHAR(1) NULL DEFAULT 'A',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `document_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cun_test`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cun_test`.`user` ;

CREATE TABLE IF NOT EXISTS `cun_test`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `document` VARCHAR(45) NOT NULL,
  `date_ini` DATETIME NOT NULL DEFAULT now(),
  `date_update` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `cedula_UNIQUE` (`document` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cun_test`.`questions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cun_test`.`questions` ;

CREATE TABLE IF NOT EXISTS `cun_test`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NOT NULL,
  `is_comment` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `question_UNIQUE` (`question` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cun_test`.`answers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cun_test`.`answers` ;

CREATE TABLE IF NOT EXISTS `cun_test`.`answers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `answer` VARCHAR(255) NOT NULL,
  `questions_id` INT NOT NULL,
  `correct_answer` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_answers_questions_idx` (`questions_id` ASC),
  CONSTRAINT `fk_answers_questions`
    FOREIGN KEY (`questions_id`)
    REFERENCES `cun_test`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cun_test`.`answers_has_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cun_test`.`answers_has_user` ;

CREATE TABLE IF NOT EXISTS `cun_test`.`answers_has_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `questions_id` INT NOT NULL,
  `answers_id` INT NULL,
  `count_questions` INT NOT NULL,
  `count_resolve` INT NOT NULL DEFAULT 0,
  `date_generate` DATETIME NOT NULL DEFAULT now(),
  `time` DOUBLE NOT NULL DEFAULT 0,
  `comment` VARCHAR(100) NULL,
  `is_correct` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`, `user_id`, `questions_id`),
  INDEX `fk_answers_has_user_user1_idx` (`user_id` ASC),
  INDEX `fk_answers_has_user_answers1_idx` (`answers_id` ASC),
  INDEX `fk_answers_has_user_questions1_idx` (`questions_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `fk_answers_has_user_answers1`
    FOREIGN KEY (`answers_id`)
    REFERENCES `cun_test`.`answers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_answers_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `cun_test`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_answers_has_user_questions1`
    FOREIGN KEY (`questions_id`)
    REFERENCES `cun_test`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `cun_test`.`admin`
-- -----------------------------------------------------
START TRANSACTION;
USE `cun_test`;
INSERT INTO `cun_test`.`admin` (`id`, `username`, `password`, `status`) VALUES (1, 'admin', '1234', 'A');

COMMIT;


-- -----------------------------------------------------
-- Data for table `cun_test`.`questions`
-- -----------------------------------------------------
START TRANSACTION;
USE `cun_test`;
INSERT INTO `cun_test`.`questions` (`id`, `question`, `is_comment`) VALUES (DEFAULT, '¿Qué significa P.O.O?', DEFAULT);
INSERT INTO `cun_test`.`questions` (`id`, `question`, `is_comment`) VALUES (DEFAULT, '¿En que se diferencian MVC de P.O.O?', DEFAULT);
INSERT INTO `cun_test`.`questions` (`id`, `question`, `is_comment`) VALUES (DEFAULT, '¿Que necesita para usar E6S en Node.js?', DEFAULT);
INSERT INTO `cun_test`.`questions` (`id`, `question`, `is_comment`) VALUES (DEFAULT, '¿Cual es el Comando para instalar paquetes en Node.Js?', DEFAULT);
INSERT INTO `cun_test`.`questions` (`id`, `question`, `is_comment`) VALUES (DEFAULT, '¿Cual de estos es un ORM?', DEFAULT);
INSERT INTO `cun_test`.`questions` (`id`, `question`, `is_comment`) VALUES (DEFAULT, '¿Que le parecio la prueba?', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `cun_test`.`answers`
-- -----------------------------------------------------
START TRANSACTION;
USE `cun_test`;
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Programación Orientada a Objetos', 1, 1);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Paradigma Optativa de Operaciones', 1, DEFAULT);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Programación Operada en Objetos', 1, DEFAULT);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Uno es un paradigma y el otro una arquitectura', 2, 1);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Uno es para Modular el codigo y el otro no', 2, 0);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Que no se pueden usar en conjunto', 2, DEFAULT);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Nada, los navegadores actualizados ya vienen con ES6', 3, DEFAULT);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'No se puede usar ES6 en NodeJs', 3, DEFAULT);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Se pueden usar algunas funcionalidades pero para acceder a todo se necesita de Babel', 3, 1);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'npm i -S paquete', 4, 1);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'npm install --s --d', 4, 0);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'npm install --save', 4, DEFAULT);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Eloquent', 5, 1);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'Yii', 5, DEFAULT);
INSERT INTO `cun_test`.`answers` (`id`, `answer`, `questions_id`, `correct_answer`) VALUES (DEFAULT, 'mysqli', 5, 0);

COMMIT;

