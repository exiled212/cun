(()=>{
	app
		//Configuración de ui-router
			
		.config(
			[			'$stateProvider',	'$urlRouterProvider'	, 
			function(	$stateProvider,		$urlRouterProvider	){
				// Ruta del módulo de Login
				let pathLogin 		= 	'./app/angular/module/Login'
				,	loginModules 	= 	[{
					name:"login",
					url:"/login",
					controller:"LoginController",
					templateUrl:`${pathLogin}/views/index.html`
				}]

				//Recorremos todas las rutas del módulo y se las comunicamos a ui-router
				loginModules.forEach(module=>$stateProvider.state(module))


			}])
})();