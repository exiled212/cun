(()=>{
	app
		//Configuración de ui-router
			
		.config(
			//Lista de nombre real de variables que cambiaran al minificar
					[	'$stateProvider',	'$urlRouterProvider'	, 
			function(	$stateProvider,		$urlRouterProvider	){
				// Página por defecto
				$urlRouterProvider.otherwise('/404');

				// Pagina no encontrada
				let pageNotFound 	= 	[{
					name:"404",
					url:"/404",
					templateUrl:`./app/angular/layouts/404.html`
				}]

				pageNotFound.forEach(module=>$stateProvider.state(module))
			}])
})();