<?php
	class Questions extends Model {
		public function __construct(){
			parent::__construct();
		}

		public function getAll(){
			$result = array();
			$list = array();
			$result['status'] = 'error';
			$sql = "SELECT * FROM questions ORDER BY id;";
			$query = $this->db->query($sql);
			$row = $query->num_rows;
			if($row != 0){
				while($row = $query->fetch_assoc()){
					$list[] = $row;
				}
			}
			$result['status'] = 'success';
			$result['data'] = ['questions'=>$list];
			return $result;
		}
		
	}