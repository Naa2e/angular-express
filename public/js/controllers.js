'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('IndexCtrl', function ($scope) {
    // write Ctrl here

  }).
  controller('RegCtrl', function ($scope) {
    // write Ctrl here

  }).

  controller('FormCtrl', function ($scope) {
    // write Ctrl here

  }).

  controller('LoginCtrl', function ($scope) {
    // write Ctrl here

  });

