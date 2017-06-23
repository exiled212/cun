(()=>{

	app.
		controller('AnswersController', ['$scope', '$stateParams', 'Answers', function($scope, $stateParams, Answers){


			let questionId = $stateParams.questionId;
			let isComent = $stateParams.isComent;

			$scope.isComent = isComent;

			$scope.answers = Answers.get();

			Answers.setByQuestion(questionId);
		}])
})();