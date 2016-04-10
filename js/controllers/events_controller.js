app.controller('EventsController', ['$scope', '$http', 'EventsService', '$routeParams', function ($scope, $http, EventsService, $routeParams) {

  $scope.event;

  EventsService.oneEvent($routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (payload) {
    console.log(payload);
    $scope.event = payload.data.event[0];
  })

  $scope.deleteEvent = function () {
    var eventDel = $scope.event;
    EventsService.deleteEvent(eventDel, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (event) {
      console.log("We have deleted the ", event);
    })
  }

}])
