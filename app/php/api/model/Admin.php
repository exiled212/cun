<?php

	class Admin extends Model {
		public function __construct(){
			parent::__construct();
		}

		//Nos permite acceder a los datos del usuario admin por medio de el username y el password
		public function validate($username, $password){
			$result = array();
			$result['status'] = 'error';
			$sql = "SELECT * FROM admin WHERE username = ? AND password = ?;";
			$stmt = $this->db->prepare($sql);
			$stmt->bind_param('ss', $username, $password);
			$stmt->execute();

			$stmt->store_result();
			//Para usar bind_param en el select, necesitamos declarar en variables todos los campos de la tabla
			$stmt->bind_result($id, $username_table, $password_ini, $status);
			$stmt->fetch();
			if( count($stmt->error_list) != 0 ){
				$result['code_error'] = $stmt->errno;
				$result['message'] = $stmt->error;
			} else {
				$result['status'] = 'success';
				$result['data'] = ['admin'=>['id'=>$id, 'username'=>$username_table]];
			}
			return $result;
		}
		
	}