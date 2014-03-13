userModule.controller('usersController', function($scope, usersFactory){
	$scope.users = usersFactory.getUsers();

	$scope.save = function(){
		if($scope.user.id == null){
			

			var uid = usersFactory.getUID();

			$scope.user.id = uid; //Assume that the last user has the highest id
			$scope.users.push($scope.user);
			usersFactory.addUser($scope.user);
		} else {
			//edit the user
			usersFactory.editUser($scope.user);
			for(var i=0; i<$scope.users.length; i++) {
				if(id == $scope.users[i].id){
					$scope.users[i] = $scope.user;
				}
			}
		}
		$scope.user = {};
		$scope.userform.$setPristine();
	};

	$scope.delete = function(id){
		for(var i=0; i<$scope.users.length; i++) {
			if(id == $scope.users[i].id){

				usersFactory.removeUser($scope.users[i]);
				$scope.users.splice(i, 1);
			}
		}
		if(id == $scope.user.id){
			$scope.user = {};
		}
	};

	$scope.edit = function(id){
		for(var i=0; i<$scope.users.length; i++) {
			if(id == $scope.users[i].id){
				$scope.user = $scope.users[i];
			}
		}
	};
});

