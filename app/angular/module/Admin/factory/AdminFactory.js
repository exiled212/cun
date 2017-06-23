(()=>{


	app.
		factory('Admin', ['$http', '$q', function($http, $q){

			//Contenedor de datos de administrador
			let admin = {};

			return {

				//Envia los datos del administrador para validarlos y determinar si dar permiso de acceso o no
				login(admin){
					username = admin.username;
					password = admin.password;
					data = {username, password}
					return $http.post(`/cun/app/php/admin/login`, data);
				},

				//almacenamos los datos en el contenedor por medio de un foreach, esto por la particularidad
				//de que el scope no detecta los cambios sí se declara el json directamente
				set(data){
					admin = {};
					for(let i in data){
						admin[i] = data[i];
					}
				},

				get(){
					return admin;
				},

				//Limpiamos el contenedor, esto evitara que los datos esten presentes en momentos no deseados.
				clear(){
					admin = {};
				}

			};
		}]);


})();