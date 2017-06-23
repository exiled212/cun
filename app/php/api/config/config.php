<?php

	//Configuracion de slim framework para la API
	return [
		'path'=>[
			'controller' =>'./api/controller',
			'model' =>'./api/model',
			'routes'=>'./api/routes'
		],
		'db' => [
			'host' =>'127.0.0.1',
			'name' =>'cun_test',
			'user' =>'dev',
			'password'=>'1234',
			'driver'=>'mysql'
		]
		
	];