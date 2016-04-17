var app = angular.module('poolIt', ['ngRoute', 'ngResource', 'satellizer']);

app.config(function($routeProvider, $locationProvider, $httpProvider, $authProvider) {

    $authProvider.facebook({
      clientId: '1611367362446165'
    })

    $routeProvider
      .when('/', {
        templateUrl: 'partials/splash.html',
        controller: 'AuthController',
        access: { requiredLogin: false }
      })
      .when('/api/orgs', {
        templateUrl: 'partials/orgs.html',
        controller: 'MainController',
        access: { requiredLogin: false }
      })
      .when('/api/orgs/:id', {
        templateUrl: 'partials/orgShow.html',
        controller: 'MainController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:id/groups', {
        templateUrl: 'partials/orgShow.html',
        controller: 'MainController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:id', {
        templateUrl: 'partials/groupShow.html',
        controller: 'GroupsController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:id/delete', {
        templateUrl: 'partials/orgShow.html',
        controller: 'GroupsController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:id/events', {
        templateUrl: 'partials/groupShow.html',
        controller: 'GroupsController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:groups_id/events/:id/delete', {
        templateUrl: 'partials/groupShow.html',
        controller: 'EventsController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:groups_id/events/:id', {
        templateUrl: 'partials/eventShow.html',
        controller: 'EventsController'
        // access: { requiredLogin: true }
      })
      .when('/auth/signIn', {
        templateUrl: 'partials/splash.html',
        controller: 'AuthController',
        access: { requiredLogin: false }
      })
      .when('/auth/signUp', {
        templateUrl: 'partials/splash.html',
        controller: 'AuthController',
        access: { requiredLogin: false }
      })
      .when('/api/users', {
        templateUrl: 'partials/users.html',
        controller: 'UsersController'
        // access: { requiredLogin: true }
      })
      .when('/api/users/:id', {
        templateUrl: 'partials/profile.html',
        controller: 'UsersController'
        // access: { requiredLogin: true }
      })
      .when('/api/users/:id/kids', {
        templateUrl: 'partials/profile.html',
        controller: 'UsersController'
        // access: { requiredLogin: true }
      })
      .when('/api/users/:users_id/kids/:id/edit', {
        templateUrl: 'partials/profile.html',
        controller: 'UsersController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:groups_id/events/:id/rides', {
        templateUrl: 'partials/eventShow.html',
        controller: 'EventsController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:groups_id/events/:id/seats', {
        templateUrl: 'partials/eventShow.html',
        controller: 'EventsController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:groups_id/events/:id/update', {
        templateUrl: 'partials/eventShow.html',
        controller: 'EventsController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:id/update', {
        templateUrl: 'partials/groupShow.html',
        controller: 'GroupsController'
        // access: { requiredLogin: true }
      })
      .when('/api/users/:users_id/kids/:id/update', {
        templateUrl: 'partials/profile.html',
        controller: 'UsersController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:groups_id/events/:events_id/rides/:id/update', {
        templateUrl: 'partials/eventShow.html',
        controller: 'EventsController'
        // access: { requiredLogin: true }
      })
      .when('/api/orgs/:orgs_id/groups/:groups_id/events/:events_id/seats/:id/update', {
        templateUrl: 'partials/eventShow.html',
        controller: 'EventsController'
        // access: { requiredLogin: true }
      })
      // otherwise({
      //   redirectTo: '/'
      // })
      // $httpProvider.interceptors.push('TokenInterceptor');


});
