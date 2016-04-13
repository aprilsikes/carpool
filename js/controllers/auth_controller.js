app.controller('AuthController', ['$scope', '$location', '$window', 'UserService', 'AuthService', '$routeParams', function ($scope, $location, $window, UserService, AuthService, $routeParams) {

  $scope.user;

  $scope.signIn = function (user) {
    if (email !== undefined && password !== undefined) {
      UserService.signIn(email, password).success(function (data) {
        AuthService.isLogged = true;
        $window.sessionStorage.token = data.token;
        $location.path('/api/users/'+user.id);
      }).error(function (status, data) {
          console.log(status);
          console.log(data);
      })
    }
  }

  $scope.signOut = function () {
    if (AuthService.isLogged) {
      AuthService.isLogged = false;
      delete $window.sessionStorage.token;
      $location.path('/');
    }
  }

  $scope.signUp = function (user) {
    
    AuthService.signUp(user).then(function (user) {

    })
  }
}])
