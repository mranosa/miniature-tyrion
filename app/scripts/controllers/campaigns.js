'use strict';

angular.module('miniatureTyrionApp')
  .controller('CampaignsCtrl', function ($scope, NavService) {
    NavService.updateActiveNav();
  });
