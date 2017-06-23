<?php

	$config = require './api/config/config.php';
	$modelPath = $config['path']['model'];
	require $modelPath.'/AnswersHasUser.php';

	class AnswersHasUserController {

		public function setData($req, $res){
			$data = $req->getParams();
			$answers = $data['data'];
			$user = $data['user'];
			$comments = $data['comments'];
			$Model = new AnswersHasUser();
			$result = $Model->save($answers, $user, $comments);
			return $res->withJson($result);
		}


		public function getAll($req, $res){
			$Model = new AnswersHasUser();
			$result = $Model->getAll();
			return $res->withJson($result);
		}

	}