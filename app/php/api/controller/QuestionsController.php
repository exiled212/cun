<?php

	$config = require './api/config/config.php';
	$modelPath = $config['path']['model'];
	require $modelPath.'/Questions.php';

	class QuestionsController {

		public function getAll($req, $res){
			$Model = new Questions();
			$result = $Model->getAll();
			return $res->withJson($result);
		}

	}