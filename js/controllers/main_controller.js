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
        $scope.groupValueB = "Group";
        break;
      case 'Sports':
        $scope.groupValue = "Teams";
        $scope.groupValueB = "Team";
        break;
      case 'Scouts':
        $scope.groupValue = "Troops";
        $scope.groupValueB = "Troop";
        break;
      case 'Arts':
        $scope.groupValue = "Classes";
        $scope.groupValueB = "Class";
        break;
      default:
        $scope.groupValue = "Groups";
        $scope.groupValueB = "Group";
    }
  })

  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }

  // $scope.group = {};
  $scope.addGroup = function (org, group_name, orgs_id) {
    var newGroup = {};
    newGroup.group_name = group_name;
    newGroup.orgs_id = $routeParams.id;
    OrgsService.addGroup(newGroup).then(function (group) {
      console.log("We have received the ", group);
    })
  }

}])
