<?php
	class AnswersHasUser extends Model {
		public function __construct(){
			parent::__construct();
		}

		public function save($data, $user, $comments){
			$comment = null;
			//Numero de cédula del usuario
			$document = $user['document'];
			//Numero de respuestas respondidas
			$countResolve = count($data);
			//Fecha actual 
			$dateTime = date("Y-m-d H:i:s");
			# $document, $questionId, $answerId, $countResolve, $comment
			$sql = "CALL insert_answers(?, ?, ?, ?, ?, ?);";

			$result['status'] = 'error';
			foreach($data as $questionId=>$row){
				foreach($row as $answerId=>$selected){
					if($selected){
						$stmt = $this->db->prepare($sql);
						$stmt->bind_param('iiiiss', $document, $questionId, $answerId, $countResolve, $comment, $dateTime);
						$stmt->execute();
					}
				}
			}
			$answerId = null;
			foreach($comments as $questionId=>$comment){
				$stmt = $this->db->prepare($sql);
				$stmt->bind_param('iiiiss', $document, $questionId, $answerId, $countResolve, $comment, $dateTime);
				$stmt->execute();
			}
			$result['status'] = 'success';
			return $result;
		}
		

		public function getAll(){
			$list = array();
			$sql = "SELECT ahu.id id, u.document document, q.question question, a.answer answer, ahu.is_correct is_correct, q.is_comment is_comment, ahu.comment comment, ahu.date_generate date_generate FROM answers_has_user ahu
					INNER JOIN user u on u.id = ahu.user_id
					INNER JOIN questions q ON q.id = ahu.questions_id
					LEFT JOIN answers a ON a.id = ahu.answers_id;
";
			$query = $this->db->query($sql);
			$row = $query->num_rows;
			if($row != 0){
				while($row = $query->fetch_assoc()){
					$list[] = $row;
				}
			}
			$result['status'] = 'success';
			$result['data'] = ['answersHasUser'=>$list];
			return $result;
		}
	}