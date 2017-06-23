<?php

	$config = require './api/config/config.php';
	$pathController = $config['path']['controller'];

	require $pathController.'/AdminController.php';


	$app->post('/admin/login', function($req, $res, $args = []){
		$AdminController = new AdminController();
		return $AdminController->login($req, $res);
	});
