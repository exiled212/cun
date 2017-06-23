<?php
	//Nos aseguramos de que el timezone corresponda a Colombia
	date_default_timezone_set('America/Bogota');

	//Cargamos la configuración
	$config = require './api/config/config.php';

	//Se inicia slim3 Framework
	require('./vendor/autoload.php');
	$app = new Slim\App($config);

	//Agregamos el Molde de los Modelos
	$modelPath = $config['path']['model'];
	require $modelPath.'/Model.php';


	//Rutas de la api
	$routes = $config['path']['routes'];
	require $routes.'/user.php';
	require $routes.'/questions.php';
	require $routes.'/answers.php';
	require $routes.'/answersHasUser.php';
	require $routes.'/admin.php';

	$app->run();