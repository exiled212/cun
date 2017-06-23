<?php

	$config = require './api/config/config.php';
	$modelPath = $config['path']['model'];
	require $modelPath.'/Admin.php';

	class AdminController {

		public function login($req, $res){
			$data = $req->getParams();
			$username = $data['username'];
			$password = $data['password'];
			$Model = new Admin();
			$result = $Model->validate($username, $password);
			return $res->withJson($result);
		}

	}