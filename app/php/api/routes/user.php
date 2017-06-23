<?php

	$config = require './api/config/config.php';
	$pathController = $config['path']['controller'];

	require $pathController.'/LoginController.php';


	$app->post('/login', function($req, $res, $args = []){
		$LoginController = new LoginController();
		return $LoginController->index($req, $res);
	});


	$app->get('/user/document/{document}', function($req, $res, $args = []){
		$LoginController = new LoginController();
		return $LoginController->getUserByDocument($req, $res);
	});