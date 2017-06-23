(()=>{
	app
		//Configuración de ui-router
		.config(
					[	'$stateProvider',	'$urlRouterProvider'	, 
			function(	$stateProvider,		$urlRouterProvider	){

				// Ruta del módulo de Login
				let layout 			= 	'./app/angular/layouts/main.html'
				,	pathLogin 		= 	'./app/angular/module/Admin'
				,	AdminModules 	= 	[
					{
						name:"admin",
						url:"/admin",
						templateUrl:layout
					},

					{
						name:"admin.login",
						url:"/login",
						controller:"AdminController",
						templateUrl:`${pathLogin}/views/login.html`
					},

					{
						name:"admin.main",
						url:"/main",
						controller:"DetailController",
						templateUrl:`${pathLogin}/views/index.html`
					}
					
				]

				AdminModules.forEach(module=>$stateProvider.state(module))


			}])
})();