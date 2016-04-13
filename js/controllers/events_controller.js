app.controller('EventsController', ['$scope', '$http', 'EventsService', '$routeParams', function ($scope, $http, EventsService, $routeParams) {

  $scope.event;
  $scope.ride;
  $scope.seat

  EventsService.oneEvent($routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (payload) {
    $scope.event = payload.data.event[0];
    $scope.rides = payload.data.rides;
    $scope.seats = payload.data.seats;
  })

  $scope.editEvent = function (event) {
    EventsService.editEvent(event, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (event) {
      console.log("We have updated the ", event);
    })
  }

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

  $scope.toggleForm2 = function () {
    $scope.showForm2 = !$scope.showForm2;
  }

  $scope.needRide = function (kid_name, school, events_id) {
    var newRide = $scope.ride;
    EventsService.needRide(newRide, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (ride) {
      console.log("We have received the ", ride);
    })
  }

  $scope.offerRide = function(ride) {
    EventsService.editRide($routeParams.orgs_id, $routeParams.groups_id, $routeParams.events_id, $routeParams.id, ride).then(function(ride) {
      console.log("We have updated the ", ride);
    })
  }

  $scope.acceptSeat = function(seat) {
    EventsService.editSeat($routeParams.orgs_id, $routeParams.groups_id, $routeParams.events_id, $routeParams.id, seat).then(function(seat) {
      console.log("We have updated the ", seat);
    })
  }

  $scope.haveSeats = function (username, number_of_seats, events_id) {
    var newSeat = $scope.seat;
    EventsService.haveSeats(newSeat, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function (seat) {
      console.log("We have received the ", seat);
    })
  }

}])
