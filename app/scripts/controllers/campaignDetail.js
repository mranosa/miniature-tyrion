'use strict';

angular.module('miniatureTyrionApp')
  .controller('CampaignDetailCtrl', function ($scope, $routeParams, NavService) {
  	NavService.updateActiveNav();
	$scope.campaignUrl = $routeParams.campaignUrl;    
  });
