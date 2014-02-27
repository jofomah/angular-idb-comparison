'use strict';

angular.module('App')
  .config(function($stateProvider) {
    $stateProvider.state('native', {
      url: '/native',
      templateUrl: 'views/native.html',
      controller: function($window, $scope, alerts) {
        alerts.add({
          msg: 'Demo incomplete'
        });
        var db,
            version = 2;

        if(!db) {
          var request = $window.indexedDB.open('native', version);

          request.onupgradeneeded = function(e) {
            var db = e.target.result;
            e.target.transaction.onerror = $window.indexedDB.onerror;
            db.createObjectStore('todos', {keyPath: 'id'});
          };

          request.onsuccess = function(e) {
            alerts.add({
              msg: 'indexedDB connection established',
              type: 'success'
            });
            db = e.target.result;
            $scope.todo = {};
            var i = 0;
            $scope.addTodo = function(todo) {
              var trans = db.transaction(['todos'], 'readwrite');
              var store = trans.objectStore('todos');
              todo.id = i++;
              var request = store.put(todo);
              request.onsuccess = function() {
                $scope.todo = {};
                alerts.add({
                  msg: 'Added todo',
                  type: 'success'
                });
              };
            };
          };
        }


      }
    });
  });
