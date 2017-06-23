<?php
	class Answers extends Model {
		public function __construct(){
			parent::__construct();
		}

		public function getAllByQuestionId($id){
			$result = array();
			$list = array();
			$result['status'] = 'error';
			//Por ser una variable que el valor es ingresado por el sistema y no por el usuario,
			//podemos darnos el lijo de concatenar directo y usar query de mysqli que es mas practico para los selects
			$sql = "SELECT * FROM answers WHERE questions_id = ".$id." ORDER BY id;";
			$query = $this->db->query($sql);
			$row = $query->num_rows;
			if($row != 0){
				while($row = $query->fetch_assoc()){
					$list[] = $row;
				}
			}
			$result['status'] = 'success';
			$result['data'] = ['answers'=>$list];
			return $result;
		}

		public function getByDocument($document){
			$result = array();
			$list = array();
			$result['status'] = 'error';
			$sql = "SELECT * FROM answers_has_user au inner join user u on au.user_id = u.id 
					WHERE au.date_generate = (SELECT date_generate FROM answers_has_user WHERE user_id = u.id ORDER BY date_generate DESC LIMIT 1) 
					AND u.document = ".$document.";";
			$query = $this->db->query($sql);
			$row = $query->num_rows;
			if($row != 0){
				while($row = $query->fetch_assoc()){
					$list[] = $row;
				}
			}
			$result['status'] = 'success';
			$result['data'] = ['answers'=>$list];
			return $result;
		}
		public function getAll(){
			$result = array();
			$list = array();
			$result['status'] = 'error';
			$sql = "SELECT count(1) as count_correct_answer FROM answers a INNER JOIN questions q ON q.id = a.questions_id WHERE correct_answer = 1;";
			$query = $this->db->query($sql);
			$row = $query->num_rows;
			$data = $query->fetch_assoc();
			$result['status'] = 'success';
			$result['data'] = ['count_correct_answer'=>$data['count_correct_answer']];
			return $result;
		}
		
	}