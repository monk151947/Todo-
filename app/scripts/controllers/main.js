'use strict';

/**
 * @ngdoc function
 * @name mytodooApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodooApp
 */
angular.module('mytodooApp')
  .controller('MainCtrl', function ($scope) {
     $scope.todos = [];
     $scope.addTodoo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
