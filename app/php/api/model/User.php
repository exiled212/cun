<?php

	class User extends Model {
		public function __construct(){
			parent::__construct();
		}

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
		
	}