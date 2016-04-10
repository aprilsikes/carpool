app.controller('GroupsController', ['$scope', '$http', 'GroupsService', '$routeParams', function ($scope, $http, GroupsService, $routeParams) {

  $scope.group;
  $scope.event;

  GroupsService.oneGroup($routeParams.orgs_id, $routeParams.id).then(function (payload) {
    $scope.group = payload.data.group[0];
    $scope.events = payload.data.events;
    $scope.org = payload.data.org;
  })

  $scope.deleteGroup = function () {
    var groupDel = $scope.group;
    GroupsService.deleteGroup(groupDel, $routeParams.orgs_id, $routeParams.id).then(function (group) {
      console.log("We have deleted the ", group);
    })
  }

  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }

  $scope.addEvent = function (event_name, date, time, location, groups_id) {
    var newEvent = $scope.event;
    GroupsService.addEvent(newEvent, $routeParams.orgs_id, $routeParams.id).then(function (event) {
      console.log("We have received the ", event);
    })
  }

  // $scope.deleteEvent = function () {
  //   var eventDel = $scope.event;
  //   GroupsService.deleteEvent(eventDel, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (event) {
  //     console.log("We have deleted the ", event);
  //   })
  // }

}])
