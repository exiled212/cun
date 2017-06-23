<?php

	$config = require './api/config/config.php';
	$pathController = $config['path']['controller'];

	require $pathController.'/AnswersController.php';

	$app->get('/answers/{questionId}/list', function($req, $res, $args = []){
		$AnswersController = new AnswersController();
		return $AnswersController->getAllByQuestionId($req, $res);
	});
	$app->get('/answers/document/{document}', function($req, $res, $args = []){
		$AnswersController = new AnswersController();
		return $AnswersController->getByDocument($req, $res);
	});
	$app->get('/answers/list', function($req, $res, $args = []){
		$AnswersController = new AnswersController();
		return $AnswersController->getAll($req, $res);
	});