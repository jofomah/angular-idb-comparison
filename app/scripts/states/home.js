'use strict';

angular.module('App')
  .config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: function($window, alerts, $scope) {
        if(!$window.indexedDB) {
          alerts.add({
            msg: 'Your browser doesn\'t support indexedDB',
            type: 'danger'
          });
        }
        $scope.implementations = [
          'native',
        ];
      }
    });
  });
