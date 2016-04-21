app.factory('EventsService', ['$http', function($http) {
  return {
    oneEvent: function(orgs_id, groups_id, id) {
      return $http.get('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id, {method: 'jsonp'});
      // return $http.get('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id, {method: 'jsonp'});
    },
    deleteEvent: function(eventDel, orgs_id, groups_id, id) {
      return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/delete');
      // return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/delete');
    },
    needRide: function(newRide, orgs_id, groups_id, id) {
      return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/rides', newRide);
      // return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/rides', newRide);
    },
    haveSeats: function(newSeat, orgs_id, groups_id, id) {
      return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/seats', newSeat);
      // return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/seats', newSeat);
    },
    editEvent: function(event, orgs_id, groups_id, id) {
      return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/update', event);
      // return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/update', event);
    },
    editRide: function(ride, orgs_id, groups_id, events_id, id) {
      return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+events_id+'/rides/'+id+'/update', ride);
      // return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+events_id+'/rides/'+id+'/update', ride);
    },
    editSeat: function(seat, orgs_id, groups_id, events_id, id) {
      return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+events_id+'/seats/'+id+'/update', seat);
      // return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+events_id+'/seats/'+id+'/update', seat);
    }
  }
}])
