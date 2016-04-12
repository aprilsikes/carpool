app.controller('EventsController', ['$scope', '$http', 'EventsService', '$routeParams', function ($scope, $http, EventsService, $routeParams) {

  $scope.event;
  $scope.ride;
  $scope.seat

  EventsService.oneEvent($routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (payload) {
    console.log(payload);
    $scope.event = payload.data.event[0];
    $scope.rides = payload.data.rides;
    $scope.seats = payload.data.seats;
  })

  $scope.deleteEvent = function () {
    var eventDel = $scope.event;
    EventsService.deleteEvent(eventDel, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (event) {
      console.log("We have deleted the ", event);
    })
  }

  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }

  $scope.toggleForm1 = function () {
    $scope.showForm1 = !$scope.showForm1;
  }

  $scope.needRide = function (kid_name, school, events_id) {
    var newRide = $scope.ride;
    EventsService.needRide(newRide, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (ride) {
      console.log("We have received the ", ride);
    })
  }

  $scope.haveSeats = function (username, number_of_seats, events_id) {
    var newSeat = $scope.seat;
    EventsService.haveSeats(newSeat, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (seat) {
      console.log("We have received the ", seat);
    })
  }

}])
