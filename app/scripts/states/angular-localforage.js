'use strict';

angular.module('App')
  .config(function($stateProvider) {
    $stateProvider.state('angular-localforage', {
      url: '/angular-localforage',
      templateUrl: 'views/angular-localforage.html',
      controller: function($scope, $localForage, alerts) {
        var i = 1;
        $scope.todo = {};
        $scope.todos = [];
        alerts.add({
          msg: $localForage.getDriver()
        });
        $scope.addTodo = function(todo) {
          $localForage.set('' + i, todo);
          $scope.todo = {};
          $localForage.get('' + i).then(function(todo) {
            $scope.todos.push(todo);
          });
          i = i++;
        };
      }
    });
  });
