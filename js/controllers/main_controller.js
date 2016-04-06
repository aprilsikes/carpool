app.controller('MainController', ['$scope', '$http', 'OrgsService', function ($scope, $http, OrgsService) {

  $scope.orgs;

  OrgsService.all().then(function (orgs) {
    console.log('here it is')
    console.log(orgs);
    console.log('*******');
    console.log(orgs.data);
    $scope.orgs = orgs.data
  })

}])
