<?php

	$config = require './api/config/config.php';
	$pathController = $config['path']['controller'];

	require $pathController.'/QuestionsController.php';


	$app->get('/questions/list', function($req, $res, $args = []){
		$QuestionsController = new QuestionsController();
		return $QuestionsController->getAll($req, $res);
	});