(()=>{
	app
		//Configuración de ui-router
			
		.config(
			//Lista de nombre real de variables que cambiaran al minificar
					[	'$stateProvider',	'$urlRouterProvider'	, 
			function(	$stateProvider,		$urlRouterProvider	){

				// Ruta del módulo de Login
				let layout 			= 	'./app/angular/layouts/main.html'
				,	pathLogin 		= 	'./app/angular/module/Main'
				,	MainModules 	= 	[
					{
						name:"main",
						url:"/",
						templateUrl:layout
					},

					{
						name:"main.questions",
						url:"prueba/:document",
						controller:"QuestionsController",
						templateUrl:`${pathLogin}/views/index.html`
					},

					{
						name:"main.questions.answers",
						url:"preguntas/:questionId/:isComent",
						controller:"AnswersController",
						templateUrl:`${pathLogin}/views/answers.html`
					}
				]

				MainModules.forEach(module=>$stateProvider.state(module))


			}])
})();