(()=>{

	app.
		controller('QuestionsController', 
			[			'$scope', '$rootScope',	'$stateParams', 	'$state',	'Questions',	'Content',	'AnswersHasUser', 	'User', 
			function(	$scope	, $rootScope,	$stateParams,		$state,		Questions,		Content,	AnswersHasUser,		User){

				//almacenamos las funciones dentro del scope
				let document = $stateParams.document;
				
				$scope.functions = {};

				$scope.user = User.get();

				//function que permite declarar al usuario por medio de su documento de identidad
				
				//En este caso se usara para comunicar por promesas el valor de 'user', esto es por los problemas
				//que suelen causar los scope para detectar los cambios en tiempo real.
				//De esta forma obtenemos la fecha de ingreso del usuario y la comparamos con la fecha 
				// actual(transfomadas en formato unix) y así calcular los 10 minutos que poseera el usuario para 
				//responder a la prueba, estos 10m se basan directamente en la fecha de ingreso de la basde de datos
				User.setByDocument(document)
					.then(user=>{
						//almacenamos el setInterval en una variable temporal global para que al ingresar a la vista
						//de resultados podamos detenerlo y evitar que continue ejecutando el proceso.
						$rootScope.setInterval = setInterval(()=>{
							$scope.seconds = Math.floor(new Date(user.date_update) / 1000);
							$scope.secondsNow = Math.floor(new Date() / 1000);
							$scope.time =  10 - Math.floor( ($scope.secondsNow - $scope.seconds)/60);
							if($scope.time <= 0){
								//Sí se pasa el tiempo, llama la funcion save para almacenar las respuestas
								AnswersHasUser.save(Content.get(), {document}, Content.getComments())
									.then(result=>{
										//redirecciona a la vista de resultados
										$state.go('main.result', {document});
									})
							}
							//Aplicamos un apply para que el relos se mantenga funcionando en tiempo real
							$scope.$apply();
						}, 1000)	
					})

				//Aquí desplegaremos un mensaje de confirmación para almacenar los datos por submit
				$scope.functions.submit = ()=>{
					let confirmSave = confirm('Esta seguro de querer terminar la prueba, una vez hecho quedara registrado en el sistema.')
					if(confirmSave){
						AnswersHasUser.save(Content.get(), {document}, Content.getComments())
							.then(result=>{
								$state.go('main.result', {document});
							})
					}
				}

				Content.setUser({document});
				$scope.questions = Questions.get();
				Questions.set();
			}])


})();