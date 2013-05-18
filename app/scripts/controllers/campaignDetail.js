'use strict';

angular.module('miniatureTyrionApp')
  .controller('CampaignDetailCtrl', function ($scope, $routeParams, NavService, firebaseCollection, firebaseBinding, localStorageService) {
  	NavService.updateActiveNav();
	
	var loggedInUser = localStorageService.get('user');
    var userDisplayName = localStorageService.get('user_display_name');
	var campaignUrl = $routeParams.campaignUrl;
	var url = 'https://bayanhero.firebaseIO.com/campaigns/' + campaignUrl;
	var promise = firebaseBinding(url, $scope, 'item');
	$scope.donation = {
		amount : 0,
		transactionId : ''
	};

	promise.then(function(item) {
		var paymentsUrl = 'https://bayanhero.firebaseIO.com/user_data/' + item.owner + '/payments';
		var donationsUrl = 'https://bayanhero.firebaseIO.com/user_data/' + loggedInUser + '/donations';
		
		$scope.payments = new firebaseCollection(paymentsUrl);
		$scope.donations = new firebaseCollection(donationsUrl);

		$scope.addItem = function(){
	    	//add to payments of poster
	    	$scope.payments.$add({
	    		amount : $scope.donation.amount,
	    		transactionId : $scope.donation.transactionId,
	    		sponsor : loggedInUser,
	    		sponsorName : userDisplayName,
	    		url : campaignUrl,
	    		title : item.title,
	    		received : false,
	    		status : 'Pending'
	    	});

	    	//save to my donation history
	    	$scope.donations.$add({
	    		amount : $scope.donation.amount,
	    		transactionId : $scope.donation.transactionId,
	    		url : campaignUrl,
	    		title : item.title,
	    		received : false,
	    		status : 'Sent'
	    	});

			$scope.clearItem();
	    };
	});

	$scope.clearItem = function(){
    	$scope.donation = {
			amount : 0,
			transactionId : ''
		};
    };
  });
