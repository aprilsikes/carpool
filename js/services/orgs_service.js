app.factory('OrgsService', ['$http', function ($http) {
  return {
    all: function() {
      return $http.get('https://carpool-api.herokuapp.com/api/orgs', {method: "jsonp"}).then(function (orgs) {
        // return $http.get("http://localhost:3000/api/orgs");
        console.log(orgs);
        console.log(orgs.data);
      })
    },
  }
}])
