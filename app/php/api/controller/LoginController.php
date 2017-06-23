<?php

	$config = require './api/config/config.php';
	$modelPath = $config['path']['model'];
	require $modelPath.'/User.php';

	class LoginController {

		public function index($req, $res){
			$data = $req->getParams();
			$document = $data['document'];
			$Model = new User();
			$result = $Model->sigIn($document);
			return $res->withJson($result);
		}


		public function getUserByDocument($req, $res){
			$data = $req->getAttributes();
			$document = $data['document'];
			$Model = new User();
			$result = $Model->getByDocument($document);
			return $res->withJson($result);
		}

	}