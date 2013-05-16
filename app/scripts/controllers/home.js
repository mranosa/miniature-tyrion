'use strict';

angular.module('miniatureTyrionApp')
  .controller('HomeCtrl', function ($scope, NavService) {
    NavService.updateActiveNav();
  });
