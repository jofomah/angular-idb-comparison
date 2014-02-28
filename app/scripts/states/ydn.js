'use strict';

angular.module('App')
  .config(function($stateProvider) {
    $stateProvider.state('ydn', {
      url: '/ydn',
      templateUrl: 'views/ydn.html',
      controller: function($scope, $window) {
        var db = new $window.ydn.db.Storage('todos');
        console.log(db);
        $scope.todo = {};
        $scope.todos = [];
        var id = 0;
        $scope.addTodo = function(todo) {
          db.put('todos', todo, '' + id++);
          $scope.todo = {};
          var q = db.values('todos');
          q.done(function(todos) {
            $scope.todos = todos;
            $scope.$digest();
          });
        };
      }
    });
  });
