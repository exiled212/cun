(()=>{
	app
		//Configuración de ui-router
			
		.config(
			//Lista de nombre real de variables que cambiaran al minificar
					[	'$stateProvider',	'$urlRouterProvider'	, 
			function(	$stateProvider,		$urlRouterProvider	){

				// Página por defecto
				$urlRouterProvider.otherwise('/login');


				// Ruta del módulo de Login
				let pathLogin 		= 	'./app/angular/module/Login'
				,	loginModules 	= 	[{
					name:"login",
					url:"/login",
					controller:"LoginController",
					templateUrl:`${pathLogin}/view/index.html`
				}]

				loginModules.forEach(module=>$stateProvider.state(module))


			}])
})();