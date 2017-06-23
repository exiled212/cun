(()=>{

	app.
		controller('AnswersController', 
			[			'$scope', 	'$stateParams', 	'Answers',		'Content'	, 
			function(	$scope, 	$stateParams, 		Answers,		Content		){

			//Almacenamos las funciones dentro del scope
			$scope.functions = {};

			//obtenemos los valores del la url
			let questionId = $stateParams.questionId;
			let isComent = $stateParams.isComent;

			$scope.questionId = questionId;
			$scope.isComent = isComent;

			$scope.comment = Content.getComments();

			$scope.answers = Answers.get();

			Answers.setByQuestion(questionId);

			//function que nos permitira seleccionar las respuestas y guardarlas en la base de datos más tarde
			$scope.functions.select = (questionIdSelected, answerIdSelected)=>{
				Content.set(questionIdSelected, answerIdSelected)
			}
			//Para evitar que los comentarios se borren cuando interactuemos entre preguntas, usamos esta funcion
			//para detectar cuando se manipula su contenido  y almaenarlo. 
			$scope.functions.changeComments = ()=>{
				Content.setComments($scope.comment);
			}

			//Funcion que permite activar las animaciones de respuestas seleccionadas y no seleccionadas
			$scope.functions.checkSelected = (questionIdSelected, answerIdSelected)=>{
				let result = '';
				if(Content.checkSelect(questionIdSelected, answerIdSelected)){
					result = 'active';
				}
				return result;
			}
		}])
})();