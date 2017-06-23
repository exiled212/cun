<?php

	$config = require './api/config/config.php';
	$modelPath = $config['path']['model'];
	require $modelPath.'/Answers.php';

	class AnswersController {

		public function getAllByQuestionId($req, $res){
			$data = $req->getAttributes();
			$questionId = $data['questionId'];
			$Model = new Answers();
			$result = $Model->getAllByQuestionId($questionId);
			return $res->withJson($result);
		}
		public function getByDocument($req, $res){
			$data = $req->getAttributes();
			$document = $data['document'];
			$Model = new Answers();
			$result = $Model->getByDocument($document);
			return $res->withJson($result);
		}
		public function getAll($req, $res){
			$Model = new Answers();
			$result = $Model->getAll();
			return $res->withJson($result);
		}

	}