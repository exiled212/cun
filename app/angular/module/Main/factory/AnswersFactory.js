(()=>{
	app. 
		factory('Answers', ['$http', function($http){

			let answers = [];

			return {

				get(){
					return answers;
				},

				//obtenemos todas las respuestas segun la pregunta seleccionada
				setByQuestion(questionId){
					$http.get(`/cun/app/php/answers/${questionId}/list`)
						.then(result=>{
							result = result.data;
							if(result.status == 'success'){
								let data = result.data.answers;
								answers.splice(0, answers.length);
								for(let i in data){
									answers[i] = data[i];
								}
							}
						})
				}

			}
		}]);
})();