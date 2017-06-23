(()=>{
	app.

		controller('QuestionsController', 
			[			'$scope',	'Questions'
			, function(	$scope	,	Questions	){

				$scope.questions = Questions.get();
				Questions.set();
			}])


})();