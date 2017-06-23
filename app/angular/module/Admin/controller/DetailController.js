(()=>{
		app
			.controller('DetailController', 
				[				'$scope', 	'$state', 	'Admin', 	'AnswersHasUser'
				, function(		$scope, 	$state,		Admin,		AnswersHasUser){
				//Almacenamos las funciones dentro de una variable del scope para facilitar su acceso.
				$scope.functions = {};
				//Contenedor principal de los datos del formulario
				$scope.admin = {};


				//Obtenemos todos los registros de las preguntas respondidas por los usuarios
				$scope.answersHasUser = AnswersHasUser.getAnswersHasUser();
				AnswersHasUser.setAll();

				//Valida si se ingreso por medio del login y no por url, en caso de que no exista algun login, redirecciona
				//a Login
				$scope.admin = Admin.get();
				if(!$scope.admin.id){
					$state.go('login');
				}

			}])
})();