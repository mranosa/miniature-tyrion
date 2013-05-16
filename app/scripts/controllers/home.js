'use strict';

angular.module('miniatureTyrionApp')
  .controller('HomeCtrl', function ($scope, NavService, $rootScope) {
    NavService.updateActiveNav();
    $rootScope.$broadcast('user_logged_in');
  });
