'use strict';

angular.module('App')
  .config(function($stateProvider) {
    $stateProvider.state('dbjs', {
      url: '/dbjs',
      templateUrl: 'views/dbjs.html',
      controller: function($scope, $window) {
        var server;
        $window.db.open({
          server: 'dbjs',
          version: 1,
          schema: {
            todos: {
              key: {
                keyPath: 'id',
                autoIncrement: true
              }
            }
          }
        }).done(function(s) {
          server = s;
          $scope.todo = {};
          $scope.todos = [];
          $scope.addTodo = function(todo) {
            server.todos.add(todo).done(function(todo) {
              $scope.todo = {};
              $scope.todos.push(todo[0]);
              $scope.$digest();
            });
          };
        });
      }
    });
  });
