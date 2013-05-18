'use strict';

angular.module('miniatureTyrionApp')
  .controller('CampaignDetailCtrl', function ($scope, $routeParams, NavService, firebaseCollection, firebaseBinding, localStorageService) {
  	NavService.updateActiveNav();
	
	var campaignUrl = $routeParams.campaignUrl;
	var url = 'https://bayanhero.firebaseIO.com/campaigns/' + campaignUrl;
	var promise = firebaseBinding(url, $scope, 'item');
	promise.then(function(item) {
		console.log(item);
	});
  });
