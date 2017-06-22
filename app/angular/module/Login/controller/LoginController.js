(()=>{
		app
			.controller('LoginController', ['$scope', function($scope){
				$scope.functions = {};
				$scope.user = {};


				$scope.functions.submit = ()=>{
					console.log($scope.user)
				}


				//Validamos que solo se puedan ingresar numeros
				let cedulaCiudadania = $("#cedulaCiudadania").on('keyup blur', ()=>{
					let value = cedulaCiudadania.val();
					let condicion = /([a-z,A-Z,á-ú,Á-Ú,`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/¿¡])/g
					cedulaCiudadania.val(value.replace(condicion, ''))
				})

			}])
})();