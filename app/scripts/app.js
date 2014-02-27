'use strict';
angular.module('App', ['ui.router', 'ui.bootstrap', 'xc.indexedDB', 'LocalForageModule'])
  .run(function($state) {
    $state.go('home');
  });
