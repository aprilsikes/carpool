app.factory('OrgsService', ['$http', function ($http) {
  return {
    all: function() {
      return $http.get('http://localhost:3000/api/orgs', {method: "jsonp"})
      // return $http.get('https://carpool-api.herokuapp.com/orgs', {method: "jsonp"})
    },
    oneOrg: function (id) {
      return $http.get('http://localhost:3000/api/orgs/'+id, {method: 'jsonp'})
      // return $http.get('https://carpool-api.herokuapp.com/orgs'+id, {method: "jsonp"})
    },
  }
}])
