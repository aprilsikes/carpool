var app = angular.module('poolIt', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/splash.html',
        controller: 'MainController'
      })
      .when('/orgs', {
        templateUrl: 'partials/orgs.html',
        controller: 'MainController'
      })
      // .when('/orgs/:id', {
      //   templateUrl: 'partials/orgShow.html',
      //   controller: 'MainController'
      // })
    $locationProvider.html5Mode(true);
});
