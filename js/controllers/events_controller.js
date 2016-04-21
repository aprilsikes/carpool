app.controller('EventsController', ['$scope', '$http', '$route', 'EventsService', '$routeParams', function($scope, $http, $route, EventsService, $routeParams) {

  $scope.event;
  $scope.ride;
  $scope.seat

  EventsService.oneEvent($routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function(payload) {
    $scope.event = payload.data.event[0];
    $scope.rides = payload.data.rides;
    $scope.seats = payload.data.seats;
  })

  $scope.editEvent = function(event) {
    EventsService.editEvent(event, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function(event) {
      $route.reload();
      console.log("We have updated the ", event);
    })
  }

  $scope.deleteEvent = function() {
    var eventDel = $scope.event;
    EventsService.deleteEvent(eventDel, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function(event) {
      $route.reload();
      console.log("We have deleted the ", event);
    })
  }

  $scope.toggleForm = function() {
    $scope.showForm = !$scope.showForm;
  }

  $scope.toggleForm1 = function() {
    $scope.showForm1 = !$scope.showForm1;
  }

  $scope.toggleForm2 = function() {
    $scope.showForm2 = !$scope.showForm2;
  }

  $scope.needRide = function(kid_name, school, events_id) {
    var newRide = $scope.ride;
    EventsService.needRide(newRide, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function(ride) {
      $route.reload();
      console.log("We have received the ", ride);
    })
  }

  $scope.offerRide = function(ride, orgs_id, groups_id, events_id, id) {
    EventsService.editRide(ride, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.events_id, $routeParams.id).then(function(ride) {
      $route.reload();
      console.log("We have updated the ", ride);
    })
  }

  $scope.acceptSeat = function(seat, orgs_id, groups_id, events_id, id) {
    EventsService.editSeat(seat, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.events_id, $routeParams.id).then(function(seat) {
      $route.reload();
      console.log("We have updated the ", seat);
    })
  }

  $scope.haveSeats = function(username, number_of_seats, events_id) {
    var newSeat = $scope.seat;
    EventsService.haveSeats(newSeat, $routeParams.orgs_id, $routeParams.groups_id, $routeParams.id).then(function(seat) {
      $route.reload();
      console.log("We have received the ", seat);
    })
  }

}])
