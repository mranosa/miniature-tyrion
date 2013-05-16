'use strict';

angular.module('miniatureTyrionApp')
  .controller('MainCtrl', function ($scope, NavService) {
    
    NavService.updateActiveNav();

  });
