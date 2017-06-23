(()=>{
	app.
		//Este factory nos ayudara mucho ya que gracias a el conocemos que respuestas tenemos
		//seleccionadas y no las perderemos al cambiar entre preguntas, tambien ayudara mucho a guardar en 
		//la base de datos 
		factory('Content', [function(){

			let user = {};

			let content = {};

			let comments = {};

			return {
				setUser(data){
					user = {};
					for(let i in data){
						user[i] = data[i];
					}
				},

				getUser(){
					return user;
				},


				//Permite altenar entre respuesta seleccionadas o sin seleccionar
				set(questionId, answerId){
					content[questionId] = (content[questionId])?content[questionId]:{};
					content[questionId][answerId] = ( content[questionId][answerId])?!content[questionId][answerId]:true;
				},

				get(){
					return content;
				},

				//Permite verificar sí la respuestas se encuentra seleccionada
				checkSelect(questionId, answerId){
					let result = false;
					if(content[questionId] && content[questionId][answerId]){
						result = content[questionId][answerId];
					}
					return result;
				},

				setComments(data){
					comments = data;
				},

				getComments(){
					return comments;
				},

				clean(){
					user = {};
					content = {};
					comments = {};
				}

			};
		}])
})();