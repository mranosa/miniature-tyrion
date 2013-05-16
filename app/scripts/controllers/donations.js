'use strict';

angular.module('miniatureTyrionApp')
  .controller('DonationsCtrl', function ($scope, NavService) {
    NavService.updateActiveNav();
  });
