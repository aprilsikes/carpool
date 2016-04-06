app.factory('OrgsService', ['$http', function ($http) {
  return {
    all: function() {
      // return $http.get('http://localhost:3000/api/orgs', {method: "jsonp"})
      return $http.get('https://carpool-api.herokuapp.com/api/orgs', {method: "jsonp"})
    },
  }
}])
