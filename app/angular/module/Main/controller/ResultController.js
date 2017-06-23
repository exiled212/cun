(()=>{

	app.
		controller('ResultController', 
			[			'$scope', '$rootScope', 	'$stateParams',		'$state',		'Content', 		'AnswersHasUser', 
			function(	$scope,  $rootScope,	$stateParams,		$state, 		Content, 		AnswersHasUser){

			$scope.functions = {};

			let document = $stateParams.document;

			//Detenemos el interval que valida los 10 minutos para hacer el examen
			clearInterval($rootScope.setInterval);

			//obtenemos las estadisticas de la prueba (% de calificación, numero de preguntas, de preguntas correctas, entre otros...)
			AnswersHasUser.setByDocument(document)
				//Utilizamos el methodo de las promesas para asegurarlos de que los datos fueron cargados y poder manejarlos
				.then(result=>{
					return AnswersHasUser.setCountcorrectAnswer()
				})
				.then(result=>{
					AnswersHasUser.setCountcorrectAnswer();
					AnswersHasUser.setQuestionsCount();
					AnswersHasUser.setAnswersResponseCount();
					AnswersHasUser.setAnswersCorrectsCount();
					AnswersHasUser.setPorcentCorrectsCount();
					$scope.questionsCount = AnswersHasUser.getQuestionsCount();
					$scope.answersResponseCount = AnswersHasUser.getAnswersResponseCount();
					$scope.answersCorrectsCount = AnswersHasUser.getAnswersCorrectsCount();
					$scope.questionsPorcentCorrects = AnswersHasUser.getPorcentCorrectsCount();
				})

			//Limpiamos todos los datos de la prueba realizada.
			Content.clean();


			$scope.functions.close = ()=>{
				$state.go('login');
			}
			
		}])
})();