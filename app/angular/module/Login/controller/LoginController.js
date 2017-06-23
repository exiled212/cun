(()=>{
		app
			/*
			 * Controlador de la función de Ingreso para usuarios regulares, 
			 */
			.controller('LoginController',
				[				'$scope', 	'$state', 	'User'
				, function(		$scope, 	$state,		User	){
				//Almacenamos las funciones dentro de una variable del scope para facilitar su acceso.
				$scope.functions = {};
				//Contenedor principal de los datos del formulario
				$scope.user = {};

				//Funcion que permitira validar la existencia del documento en la base de datos
				//En caso de que no exista, se registra de forma automatica, caso contrario solo actualizara
				//La fecha de ingreso 'date_update'
				$scope.functions.submit = ()=>{
					User.findDocument($scope.user.document)
						.then(result=>{
							result = result.data;
							let document;
							if(result.status == 'success'){
								document = result.data.document;
								//Redirecciona al modulo 'main.questions' pasando el documento como parametro.
								$state.go('main.questions', {document});
							}
						})
				}


				//Validamos que solo se puedan ingresar numeros
				let cedulaCiudadania = $("#cedulaCiudadania").on('keyup blur', ()=>{
					let value = cedulaCiudadania.val();
					let condicion = /([a-z,A-Z,á-ú,Á-Ú,`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/¿¡])/g
					cedulaCiudadania.val(value.replace(condicion, ''))
				})

			}])
})();