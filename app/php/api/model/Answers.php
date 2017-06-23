<?php
	class Answers extends Model {
		public function __construct(){
			parent::__construct();
		}

		public function getAllByQuestionId($id){
			$result = array();
			$list = array();
			$result['status'] = 'error';
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
		
	}