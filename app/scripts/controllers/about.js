'use strict';

/**
 * @ngdoc function
 * @name mytodooApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodooApp
 */
angular.module('mytodooApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
