'use strict';

angular.module('App')
  .config(function($stateProvider) {
    $stateProvider.state('idbwrapper', {
      url: '/idbwrapper',
      templateUrl: 'views/idbwrapper.html',
      controller: function($window, $scope, alerts) {
        var store = new $window.IDBStore();

        var success = function(keyPath) {
          alerts.add({
            msg: 'Success ' + keyPath,
            type: 'success'
          });
          $scope.todo = {};
          // Use $apply since alerts are on rootscope
          $scope.$apply();
        };

        $scope.todo = {};
        $scope.addTodo = function(todo) {
          store.put(todo, success);
        };

        $scope.get = function() {
          store.getAll(function(todos) {
            $scope.todos = todos;
            $scope.$digest();
          });
        };
      }
    });
  });
