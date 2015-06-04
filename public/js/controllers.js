'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', [])
  controllers.controller('AppCtrl', function ($scope, $http) {

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

  })
  controllers.controller('IndexCtrl', function ($scope) {
    // write Ctrl here

  })
  controllers.controller('RegCtrl', function ($scope) {
    // write Ctrl here

  })

  controllers.controller('FormCtrl', function ($scope) {
    // write Ctrl here

  })

  controllers.controller('TodoCtrl', function ($scope) {
    // write Ctrl here

  })

  controllers.controller('LoginCtrl', function ($scope) {
    // write Ctrl here

  });

