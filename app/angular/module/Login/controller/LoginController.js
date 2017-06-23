(()=>{
		app
			.controller('LoginController', 
				[				'$scope', 	'$state', 	'User'
				, function(		$scope, 	$state,		User	){
				//Almacenamos las funciones dentro de una variable del scope para facilitar su acceso.
				$scope.functions = {};
				$scope.user = {};

				$scope.functions.submit = ()=>{
					User.findDocument($scope.user.document)
						.then(result=>{
							result = result.data;
							let document;
							if(result.status == 'success'){
								document = result.data.document;
								$state.go('main.questions', {document});
								
							}
						})
						.catch(error=>{
							console.log(error);
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