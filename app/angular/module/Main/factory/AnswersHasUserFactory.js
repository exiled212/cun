(()=>{
	app. 
		//Obtenemos todos los datos de estadisticas de los resultados y la lista de datos de la relación user-answers
		factory('AnswersHasUser', ['$http', '$q', function($http, $q){

			let answers = [];

			let answersHasUser = [];

			let questionsCount = 0;

			let answersResponseCount = 0;

			let answersCorrectsCount = 0;

			let questionsPorcentCorrects = 0;

			let countCorrectAnswer = 0;

			return {
				save(data, user, comments){
					return $http.post('/cun/app/php/answersHasUser/save', {data, user, comments});
				},
				setByDocument(document){
					let deferred = $q.defer();
					answers.splice(0, answers.length);
					$http.get(`/cun/app/php/answers/document/${document}`)
						.then(result=>{
							result = result.data;
							if(result.status == 'success'){
								let data = result.data.answers;
								for(let i in data){
									answers[i] = data[i];
								}
								deferred.resolve(data);
							}
						})

					return deferred.promise;
				},

				setCountcorrectAnswer(){
					let deferred = $q.defer();
					$http.get(`/cun/app/php/answers/list`)
						.then(result=>{
							result = result.data;
							if(result.status == 'success'){
								countCorrectAnswer = result.data.count_correct_answer;
							}
							deferred.resolve(result);
						})
					return deferred.promise;
				},

				getCountCorrectAnswer(){
					return countCorrectAnswer;
				},

				getQuestionsCount(){
					return questionsCount;
				},

				setQuestionsCount(){
					questionsCount =  (answers[0] && answers[0]['count_questions'])?answers[0]['count_questions']:0;
				},


				setAnswersResponseCount(){
					answersResponseCount = answers.length;
				},

				getAnswersResponseCount(){
					return answersResponseCount;
				},

				getAnswersCorrectsCount(){
					return answersCorrectsCount;
				},

				setAnswersCorrectsCount(){
					let data = answers.filter(item=>item['is_correct'] == 1);
					answersCorrectsCount = data.length;
				},

				setPorcentCorrectsCount(){
					let incorrect = answers.filter(item=>item['is_correct'] == 0);
					let count = 0;
					let questionsList = {};
					for(let i in incorrect){
						let row = incorrect[i]
						questionsList[row.questions_id] = row.questions_id;
					}
					for(let i in questionsList){
						count++;
					}
					console.log(countCorrectAnswer)
					questionsPorcentCorrects = Math.floor( ( (answersCorrectsCount-count)/countCorrectAnswer)*100 )
				},

				getPorcentCorrectsCount(){
					return questionsPorcentCorrects;
				},


				setAll(){
					$http.get('/cun/app/php/answersHasUser/list')
						.then(result=>{
							answersHasUser.splice(0, answersHasUser.length);
							result = result.data;
							if(result.status == 'success'){
								let data = result.data.answersHasUser;
								for(let i in data){
									answersHasUser[i] = data[i];
								}
							}
						})
				},

				getAnswersHasUser(){
					return answersHasUser;
				}

			}
		}]);
})();