(()=>{


	app.
		factory('User', ['$http', '$q', function($http, $q){
			//Contenedor principal de los datos del formulario
			let user = {};

			return {

				//Permite buscar al usuario por el documento agregandolo o actualizandolo
				findDocument(document){
					data = {document}
					return $http.post(`/cun/app/php/login`, data);
				},

				//Almacena los datos del usuario en el contenedor, se captura tambien por medio de promesas
				//Ya que angularjs suele dar problemas al comunicar los datos por medios asincronos o al declararlos en el $scope
				setByDocument(document){
					let deferred = $q.defer();
					$http.get(`/cun/app/php/user/document/${document}`)
						.then(result=>{
							result = result.data;
							if(result.status == 'success'){
								//Aquí limpiamos el contenedor, esto es porque ingresamos los datos por un for
								//Ingresar datos por for permite a angularjs reconocer los datos asignados al $scope
								//Muchas veces sí se declaran directamente estos no detectan los cambios hasta actualizar la página.
								user = {};
								let data = result.data.user;
								for(let i in data){
									user[i] = data[i];
								}
								deferred.resolve(user);
							}
						})
					return deferred.promise;
				},

				get(){
					return user;
				}


			};
		}]);


})();