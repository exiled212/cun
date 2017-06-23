<?php

	$config = require './api/config/config.php';
	$pathController = $config['path']['controller'];

	require $pathController.'/AnswersHasUserController.php';

	$app->post('/answersHasUser/save', function($req, $res, $args = []){
		$AnswersHasUserController = new AnswersHasUserController();
		return $AnswersHasUserController->setData($req, $res);
	});
	$app->get('/answersHasUser/list', function($req, $res, $args = []){
		$AnswersHasUserController = new AnswersHasUserController();
		return $AnswersHasUserController->getAll($req, $res);
	});