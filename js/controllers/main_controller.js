app.controller('MainController', ['$scope', '$http', '$route', 'OrgsService', '$routeParams', function($scope, $http, $route, OrgsService, $routeParams) {

  $scope.orgs;
  $scope.groups;
  $scope.singleOrg;
  $scope.group;

  OrgsService.all().then(function(orgs) {
    $scope.orgs = orgs.data;
  })

  OrgsService.oneOrg($routeParams.id).then(function(payload) {
    $scope.singleOrg = payload.data['singleOrg'];
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

  $scope.toggleForm = function() {
    $scope.showForm = !$scope.showForm;
  }

  $scope.addGroup = function(group_name, orgs_id) {
    var newGroup = $scope.group;
    OrgsService.addGroup(newGroup, $routeParams.id).then(function(group) {
      $route.reload();
      console.log("We have received the ", group);
    })
  }

}])
