(()=>{


	app.
		factory('User', ['$http', function($http){

			let user = {};

			return {

				findDocument(document){
					data = {document}
					return $http.post(`/cun/app/php/login`, data);
				},

				get(){

				}


			};
		}]);


})();