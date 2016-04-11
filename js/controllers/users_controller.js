app.controller('UsersController', ['$scope', '$http', 'UserService', '$routeParams', function ($scope, $http, UserService, $routeParams) {

  $scope.users;
  $scope.user;
  $scope.kids;

  UserService.all().then(function (users) {
    $scope.users = users.data;
    console.log(users.data);
  })

  UserService.oneUser($routeParams.id).then(function (payload) {
    $scope.user = payload.data['user'];
    $scope.kids = payload.data['kids'];
    console.log(payload.data['user']);
    console.log(payload.data['kids']);
  })

  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }

  $scope.addKid = function (kid_name, school, users_id) {
    var newKid = $scope.kid;
    UserService.addKid(newKid, $routeParams.id).then(function (kid) {
      console.log("We have received the ", kid);
    })
  }


}])
