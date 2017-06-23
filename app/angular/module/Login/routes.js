(()=>{
	app
		//Configuración de ui-router
			
		.config(
			//Lista de nombre real de variables que cambiaran al minificar
					[	'$stateProvider',	'$urlRouterProvider'	, 
			function(	$stateProvider,		$urlRouterProvider	){
				// Ruta del módulo de Login
				let pathLogin 		= 	'./app/angular/module/Login'
				,	loginModules 	= 	[{
					name:"login",
					url:"/login",
					controller:"LoginController",
					templateUrl:`${pathLogin}/views/index.html`
				}]

				loginModules.forEach(module=>$stateProvider.state(module))


			}])
})();