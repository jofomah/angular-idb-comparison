'use strict';

angular.module('App')
  .factory('alerts', function($rootScope) {
    $rootScope.alerts = [];
    return {
      add: function(alert) {
        $rootScope.alerts.push(alert);
      }
    };
  });
