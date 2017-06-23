<?php

	$config = require './api/config/config.php';
	$pathController = $config['path']['controller'];

	require $pathController.'/AnswersController.php';

	$app->get('/answers/{questionId}/list', function($req, $res, $args = []){
		$AnswersController = new AnswersController();
		return $AnswersController->getAllByQuestionId($req, $res);
	});