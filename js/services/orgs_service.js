app.factory('OrgsService', function ($http) {
  return {
    all: function() {
      return $http.get('https://carpool-api.herokuapp.com/api/orgs', {method: "jsonp"}).then(function (orgs) {
        console.log(orgs);
        console.log(orgs.data);
      })
    },
  }
})
