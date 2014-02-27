'use strict';
angular.module('App', ['ui.router', 'ui.bootstrap', 'xc.indexedDB'])
  .run(function($state) {
    $state.go('home');
  });
