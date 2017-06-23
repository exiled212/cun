(()=>{

	app.
		factory('Questions', ['$http', function($http){
			let questions = [];
			return {
				set(){
					$http.get('/cun/app/php/questions/list')
						.then(result=>{
							result = result.data;
							if(result.status == 'success'){
								let data = result.data.questions;
								questions.splice(0, questions.length);
								for(let i in data){
									questions[i] = data[i];
								}
							}
						})
				},


				get(){
					return questions;
				}
			}
		}])
})();