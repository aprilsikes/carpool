app.controller('AuthController', ['$scope', '$auth', '$location', '$window', 'UserService', 'AuthService', '$routeParams', function($scope, $auth, $location, $window, UserService, AuthService, $routeParams) {

  $scope.login = function() {
    var org = {
      email: $scope.email,
      password: $scope.password
    };
    // response is the HTTP response object from the server.
    $auth.login(org).then(function(response) {
      console.log('You have successfully signed in!');
      $location.path('/');
    }).catch(function (response) {
      console.log(response.data.message, response.status);
    })
  }

  $scope.signup = function() {
    var org = {
      org_name: $scope.org_name,
      org_url: $scope.org_url,
      email: $scope.email,
      password: $scope.password,
      image_url: $scope.image_url,
      category: $scope.category,
      street1: $scope.street1,
      street2: $scope.street2,
      city: $scope.city,
      state: $scope.state,
      zip: $scope.zip
    };
    $auth.signup(org).then(function(response) {
      $auth.setToken(response);
      $location.path('/');
    }).catch(function(response) {
      console.log(response.data.message, response.status);
    });
  }

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider).then(function(response) {
      console.log('You have successfully signed in with '+provider+'!');
      $location.path('/');
    }).catch(function(response) {
      if (response.error) {
        console.log(response.error);
      } else if (response.data) {
        console.log(response.data.message, response.status);
      } else {
        console.log(error);
      }
    })
  }

  $scope.logout = function() {
    $auth.logout();
    console.log('You have successfully logged out!');
  }

  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

}])
