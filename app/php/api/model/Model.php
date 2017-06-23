<?php
	class Model {

		public function __construct(){
			$config = require './api/config/config.php';
			$dbConfig = $config['db'];

			$host = $dbConfig['host'];
			$name = $dbConfig['name'];
			$user = $dbConfig['user'];
			$password = $dbConfig['password'];

			$db = new mysqli($host, $user, $password, $name);

			if($db->connect_errno){
				echo "N°:(".$db->connect_errno.") Error: ".$db->connect_error;
				exit();
			}
			$db->set_charset('utf8');
			$this->db = $db;
		}

	}
?>