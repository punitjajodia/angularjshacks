userModule.factory('usersFactory', function(){
	var factory = {};

	factory._setUsers = function (users){
		if(localStorage){
			localStorage.setItem("users", angular.toJson(users));
		}
	};

	factory._getUsers = function(){
		if(localStorage && localStorage.getItem("users")){
			return JSON.parse(localStorage.getItem("users"));
		}
		else{
			return [];
		}
	};

	factory.getUID = function() {
		if(localStorage && localStorage.uid){
			localStorage.uid = parseInt(localStorage.uid, 10) + 1;
		} else {
			localStorage.uid = 1;
		}
		return localStorage.uid;
	};


	factory.getUsers = function(){
		return factory._getUsers();
	};


	factory.removeUser = function(user){
		users = factory._getUsers();

		for(var i=0; i< users.length; i++) {
			if(user.id == users[i].id){
				users.splice(i, 1);
				factory._setUsers(users);
				return;
			}
		}
	};


	factory.editUser = function(user){
		users = factory._getUsers();

		for(var i=0; i< users.length; i++) {
			if(user.id == users[i].id){
				users[i] = user;
				factory._setUsers(users);
				return;
			}
		}
	};

	factory.addUser = function(user) {

		users = factory._getUsers();
		users.push(user);
		factory._setUsers(users);
	};

	return factory;
});