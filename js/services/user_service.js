app.factory('UserService', ['$http', function ($http) {
  return {
    signIn: function (user) {
      // return $http.post('http://localhost:3000/auth/signIn', user);
      return $http.post('https://carpool-api.herokuapp.com/auth/signIn', user);
    },
    signOut: function () {

    },
    all: function() {
      // return $http.get('http://localhost:3000/api/users', {method: "jsonp"});
      return $http.get('https://carpool-api.herokuapp.com/api/users', {method: "jsonp"});
    },
    oneUser: function (id) {
      // return $http.get('http://localhost:3000/api/users/'+id, {method: 'jsonp'});
      return $http.get('https://carpool-api.herokuapp.com/api/users/'+id, {method: "jsonp"});
    },
    addKid: function (newKid, id) {
      // return $http.post('http://localhost:3000/api/users/'+id+'/kids', newKid);
      return $http.post('https://carpool-api.herokuapp.com/api/users/'+id+'/kids', newKid);
    },

  }
}])
