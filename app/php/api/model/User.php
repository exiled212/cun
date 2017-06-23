<?php

	class User extends Model {
		public function __construct(){
			parent::__construct();
		}

		//Aquí es donde validamos la existencia del documento en la base de datos, si no existe se registra
		//en caso de que exista se actualiza su fecha de ingreso.
		public function sigIn($document){
			$result = array();
			$result['status'] = 'error';
			$sqlGet = "SELECT * FROM user WHERE document = ? LIMIT 1;";
			$stmtGet = $this->db->prepare($sqlGet);
			$stmtGet->bind_param('i', $document);
			$stmtGet->execute();

			$stmtGet->store_result();
			$stmtGet->bind_result($id_table, $document_table, $date_ini, $date_update);
			$stmtGet->fetch();

			if(!$id_table){
				$sqlGenerate= "INSERT INTO user (document) VALUES (?);";
				$stmtGenerate = $this->db->prepare($sqlGenerate);
				$stmtGenerate->bind_param('i', $document);
				$stmtGenerate->execute();
			} else {
				$sqlGenerate = "UPDATE user SET date_update = now() WHERE id = ?;";
				$stmtGenerate = $this->db->prepare($sqlGenerate);
				$stmtGenerate->bind_param('i', $id_table);
				$stmtGenerate->execute();
			}
			if( count($stmtGenerate->error_list) != 0 ){
				$result['code_error'] = $stmtGenerate->errno;
				$result['message'] = $stmtGenerate->error;
			} else {
				$result['status'] = 'success';
				$result['data'] = ['document'=>$document];
			}
			return $result;
		}

		public function getByDocument($document){
			$result = array();
			$result['status'] = 'error';
			$sql = "SELECT * FROM user WHERE document = ? LIMIT 1;";
			$stmt = $this->db->prepare($sql);
			$stmt->bind_param('i', $document);
			$stmt->execute();

			$stmt->store_result();
			$stmt->bind_result($id_table, $document_table, $date_ini, $date_update);
			$stmt->fetch();
			if( count($stmt->error_list) != 0 ){
				$result['code_error'] = $stmt->errno;
				$result['message'] = $stmt->error;
			} else {
				$result['status'] = 'success';
				$result['data'] = ['user'=>['id'=>$id_table, 'document'=>$document_table, 'date_ini'=>$date_ini, 'date_update'=>$date_update]];
			}
			return $result;
		}
		
	}