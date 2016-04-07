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

  the_id = $routeParams.id;
  OrgsService.oneOrg(the_id).then(function (payload) {
    console.log(payload.data);
    $scope.singleOrg = payload.data['singleOrg'];
    switch (payload.data['singleOrg'].category) {
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
    $scope.groups = payload.data['groups'];
  })

}])
