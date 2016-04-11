app.factory('EventsService', ['$http', function ($http) {
  return {
    oneEvent: function (orgs_id, groups_id, id) {
      // return $http.get('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id, {method: 'jsonp'});
      return $http.get('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id, {method: 'jsonp'});
    },
    deleteEvent: function (eventDel, orgs_id, groups_id, id) {
      // return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/delete');
      return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+groups_id+'/events/'+id+'/delete');
    },
  }
}])
