'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/index', {
      templateUrl: 'partials/index',
      controller: 'IndexCtrl'
    }).
    when('/Register', {
      templateUrl: 'partials/register',
      controller: 'RegCtrl'
    }).
    when('/Login', {
      templateUrl: 'partials/login',
      controller: 'LoginCtrl'
    }).
    when('/Form', {
      templateUrl: 'partials/form',
      controller: 'FormCtrl'
    }).
    otherwise({
      redirectTo: '/index'
    });

  $locationProvider.html5Mode(true);

  console.log($('.menu'));
});
