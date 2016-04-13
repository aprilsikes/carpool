app.factory('GroupsService', ['$http', function ($http) {
  return {
    oneGroup: function (orgs_id, id) {
      // return $http.get('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+id, {method: 'jsonp'});
      return $http.get('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+id, {method: "jsonp"});
    },
    deleteGroup: function (groupDel, orgs_id, id) {
      // return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+id+'/delete');
      return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+id+'/delete');
    },
    addEvent: function (newEvent, orgs_id, id) {
      // return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+id+'/events', newEvent);
      return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+id+'/events', newEvent);
    },
    editGroup: function (group, orgs_id, id) {
      // return $http.post('http://localhost:3000/api/orgs/'+orgs_id+'/groups/'+id+'/update', group);
      return $http.post('https://carpool-api.herokuapp.com/api/orgs/'+orgs_id+'/groups/'+id+'/update', group);
    }
  }
}])
