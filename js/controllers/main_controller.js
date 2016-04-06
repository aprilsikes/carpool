app.controller('MainController', ['$scope', '$http', 'OrgsService', function ($scope, $http, OrgsService) {

  $scope.orgs;

  OrgsService.all().then(function (orgs) {
    console.log(orgs);
    $scope.orgs = orgs.data;
  })

}])
