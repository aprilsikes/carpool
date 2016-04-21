app.factory('AuthService', ['$http', function($http) {
  return {
    validateUser: function() {
      var token = localStorage.getItem('satellizer_token');
      var data = JSON.stringify({token : token});
      return $http.post('http://localhost:3000/auth/facebook', data);
    },
    // authenticate: function () {
    //   $http.post('/auth/facebook');
    // }

    // $auth.getToken();


    // var auth = {
    //   isLogged: false;
    // },
    // signUp: function(user) {
    //   return $http.post('http://localhost:3000/api/auth/signUp', user);
      // return $http.post('https://carpool-api.herokuapp.com/api/auth/signUp', user);
    // }
  }
}])
