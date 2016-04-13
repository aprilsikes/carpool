app.controller('UsersController', ['$scope', '$http', 'UserService', '$routeParams', function ($scope, $http, UserService, $routeParams) {

  $scope.users;
  $scope.user;
  $scope.kids;

  UserService.all().then(function (users) {
    $scope.users = users.data;
  })

  UserService.oneUser($routeParams.id).then(function (payload) {
    $scope.user = payload.data['user'];
    $scope.kids = payload.data['kids'];
  })


  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }

  $scope.toggleForm1 = function () {
    $scope.showForm1 = !$scope.showForm1;
  }

  $scope.addKid = function (kid_name, school, users_id) {
    var newKid = $scope.kid;
    UserService.addKid(newKid, $routeParams.id).then(function (kid) {
      console.log("We have received the ", kid);
    })
  }

  $scope.editKid = function (kid) {
    UserService.editKid(kid, $routeParams.users_id, $routeParams.id).then(function (kid) {
      console.log("We have updated the ", kid);
    })
  }

}])
