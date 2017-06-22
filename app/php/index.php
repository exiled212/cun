<?php
	require('vendor/autoload.php');

	$app = new Slim\App();

	$app->post('/user/login/{documento}', function($request, $response, $args){
		return $response->write("La cédula que ingreso es: ".$args['documento']);
	});

	$app->run();