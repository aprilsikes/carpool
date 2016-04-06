app.controller('MainController', ['$scope', '$http', 'OrgsService', '$routeParams', function ($scope, $http, OrgsService, $routeParams) {

  $scope.orgs;
  $scope.singleOrg;

  OrgsService.all().then(function (orgs) {
    console.log('here it is')
    console.log(orgs);
    console.log('*******');
    console.log(orgs.data);
    $scope.orgs = orgs.data
  })

  the_id = $routeParams.id
  OrgsService.oneOrg(the_id).then(function (singleOrg) {
    console.log(singleOrg);
    $scope.singleOrg = singleOrg.data;
  })

}])
