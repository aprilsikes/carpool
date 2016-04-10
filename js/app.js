var app = angular.module('poolIt', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/splash.html',
        controller: 'MainController'
      })
      .when('/api/orgs', {
        templateUrl: 'partials/orgs.html',
        controller: 'MainController'
      })
      .when('/api/orgs/:id', {
        templateUrl: 'partials/orgShow.html',
        controller: 'MainController'
      })
      .when('/api/orgs/:id/groups', {
        templateUrl: 'partials/orgShow.html',
        controller: 'MainController'
      })
      .when('/api/orgs/:orgs_id/groups/:id', {
        templateUrl: 'partials/groupShow.html',
        controller: 'GroupsController'
      })
      .when('/api/orgs/:orgs_id/groups/:id/delete', {
        templateUrl: 'partials/orgShow.html',
        controller: 'GroupsController'
      })
      .when('/api/orgs/:orgs_id/groups/:id/events', {
        templateUrl: 'partials/groupShow.html',
        controller: 'GroupsController'
      })
});
