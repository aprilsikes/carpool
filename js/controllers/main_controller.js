app.controller('MainController', ['$scope', '$http', 'OrgsService', '$routeParams', function ($scope, $http, OrgsService, $routeParams) {

  $scope.orgs;
  $scope.groups;
  $scope.singleOrg;

  OrgsService.all().then(function (orgs) {
    console.log('here it is')
    console.log(orgs);
    console.log('*******');
    console.log(orgs.data);
    $scope.orgs = orgs.data;
  })

  // the_id = $routeParams.id;
  OrgsService.oneOrg($routeParams.id).then(function (payload) {
    console.log(payload.data);
    console.log('**SINGLE ORG: ' + payload.data['singleOrg']);
    $scope.singleOrg = payload.data['singleOrg'];
    console.log($scope.singleOrg);
    $scope.groups = payload.data['groups'];
    switch ($scope.singleOrg['category']) {
      case 'School':
        $scope.groupValue = "Groups";
        break;
      case 'Sports':
        $scope.groupValue = "Teams";
        break;
      case 'Scouts':
        $scope.groupValue = "Troops";
        break;
      case 'Arts':
        $scope.groupValue = "Classes";
        break;
      default:
        $scope.groupValue = "Groups";
    }
  })

}])
