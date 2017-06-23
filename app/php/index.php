<?php
	require('./vendor/autoload.php');

	$config = require './api/config/config.php';
	$app = new Slim\App($config);

	$modelPath = $config['path']['model'];
	require $modelPath.'/Model.php';

	$routes = $config['path']['routes'];

	require $routes.'/user.php';
	require $routes.'/questions.php';
	require $routes.'/answers.php';

	$app->run();