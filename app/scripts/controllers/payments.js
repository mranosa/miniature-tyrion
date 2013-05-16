'use strict';

angular.module('miniatureTyrionApp')
  .controller('PaymentsCtrl', function ($scope, NavService) {
    NavService.updateActiveNav();
  });
