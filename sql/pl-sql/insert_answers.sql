
DROP PROCEDURE IF EXISTS insert_answers;

DELIMITER $$

CREATE PROCEDURE insert_answers(
	_document_ INT,
	_questions_id_ INT,
	_answers_id_ INT,
	_questions_resolved_count INT,
    _comment_ VARCHAR(100),
    _now_ DATETIME
)
BEGIN
	#Variables de captura
	DECLARE _count_user_id INT DEFAULT 0;
    DECLARE _user_id INT DEFAULT null;
    DECLARE _count_questions INT DEFAULT 0;
    DECLARE _timestart DATETIME;
    DECLARE _time INT DEFAULT 0;
    DECLARE _is_correct INT DEFAULT 0;
    
    #Validamos que exista un registro con el documento seleccionado
	SELECT count(1) INTO _count_user_id FROM user WHERE document = _document_;
     IF _count_user_id = 0 THEN
		#Dispara una excepcion si no encuentra el registro
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Usuario no Encontrado', MYSQL_ERRNO = 00001;
     END IF;
     
     #Captura el id y la fecha con hora de ingreso de la prueba
     SELECT id, date_update INTO _user_id, _timestart FROM user WHERE document = _document_;
     
     #Calculamos el tiempo desde que ingreso a la prueba hasta que mando las respuestas
	 SELECT TIMESTAMPDIFF(MINUTE, _timestart, _now_) INTO _time;
     
     #Contamos el numero de preguntas que no son comentarios
     SELECT count(1) INTO _count_questions FROM questions WHERE is_comment = 0;
     
     #Validamos que la respuesta es correcta
     IF _answers_id_ is not null THEN     
		SELECT correct_answer INTO _is_correct FROM answers WHERE id = _answers_id_ AND questions_id = _questions_id_;
	 ELSE
		SET _is_correct = 1;
	 END IF;
     
     #Una vez que ya tenemos todos los datos, registramos la pregunta respondida.
     INSERT INTO answers_has_user (user_id, questions_id, answers_id, count_questions, count_resolve, date_generate, time, comment, is_correct) VALUES (_user_id, _questions_id_, _answers_id_, _count_questions, _questions_resolved_count, _now_, _time, _comment_, _is_correct);

END $$

