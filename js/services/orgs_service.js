app.factory('OrgsService', function ($http) {
  return {
    all: function() {
      // return $http.get('https://carpool-api.herokuapp.com/orgs', {method: "jsonp"}).then(function (orgs) {
        return $http.get("http://localhost:3000/orgs");
        console.log(orgs);
        console.log(orgs.data);
      // })
    },
  }
})
