'use strict';

angular.module('App')
  .config(function($stateProvider, $indexedDBProvider) {
    $stateProvider.state('angular-indexeddb', {
      url: '/angular-indexeddb',
      templateUrl: 'views/angular-indexeddb.html',
      controller: function($scope, $indexedDB) {
        var store = $indexedDB.objectStore('todos'),
            i = 0;
        $scope.todo = {};
        $scope.todos = [];
        $scope.addTodo = function(todo) {
          todo.id = i++;
          store.insert(todo);
          $scope.todo = {};
          $scope.todos.push(todo);
        };
        store.getAll().then(function(results) {
          $scope.todos = results;
        });
      }
    });
    $indexedDBProvider.connection('angular-indexedDB')
      .upgradeDatabase(1, function(event, db) {
        db.createObjectStore('todos', {keyPath: 'id'});
      });
  });
