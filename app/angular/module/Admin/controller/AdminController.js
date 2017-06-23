(()=>{
		app
			.controller('AdminController', 
				[				'$scope', 	'$state', 	'Admin'
				, function(		$scope, 	$state,		Admin	){
				//Almacenamos las funciones dentro de una variable del scope para facilitar su acceso.
				$scope.functions = {};
				//Contenedor principal de los datos del formulario
				$scope.admin = {};

				//Limpiamos el contenedor siempre que se ingrese a este controlador
				Admin.clear();

				//Submit que permite identificar al usuario admin.
				$scope.functions.submit = ()=>{
					Admin.login($scope.admin)
						.then(result=>{
							result = result.data;
							if(result.status == 'success'){
								let data = result.data.admin;
								if(data.id){
									Admin.set(data);
									$state.go('admin.main');
								} else {
									alert("Usuario invalido.");
								}
								
							} 
						})
				}
			}])
})();