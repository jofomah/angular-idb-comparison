'use strict';
angular.module('App', ['ui.router', 'ui.bootstrap'])
  .run(function($state) {
    $state.go('home');
  });
