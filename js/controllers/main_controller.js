app.controller('MainController', ['$scope', '$http', 'OrgsService', function ($scope, $http, OrgsService) {
  OrgsService.all().then(function (orgs) {
    $scope.orgs = orgs.data;
  })
}])
