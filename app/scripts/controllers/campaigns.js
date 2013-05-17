'use strict';

angular.module('miniatureTyrionApp')
  .controller('CampaignsCtrl', function ($scope, NavService, firebaseCollection, firebaseBinding, localStorageService) {
    NavService.updateActiveNav();

    var loggedInUser = localStorageService.get('user');
    var userDisplayName = localStorageService.get('user_display_name');

    var url = 'https://bayanhero.firebaseIO.com/campaigns';
    var myUrl = 'https://bayanhero.firebaseIO.com/user_data/' + loggedInUser + '/campaigns';
    
    $scope.items = new firebaseCollection(url);
    $scope.myItems = new firebaseCollection(myUrl);

    $scope.item = {
		title : '',
		amount : 0,
		description : ''
	}

    $scope.addItem = function(){
    	var itemUrl = $scope.item.title.toLowerCase().replace(/ /g, '-');
    	var newItem = {
				title : $scope.item.title,
				amount : $scope.item.amount,
				description : $scope.item.description,
				currAmount : 0,
				owner : loggedInUser,
				userDisplayName : userDisplayName,
				url : itemUrl
			};

		$scope.items.$add(newItem, itemUrl);
		$scope.myItems.$add(newItem, itemUrl);

		$scope.clearItem();
    };

    $scope.clearItem = function(){
    	$scope.item = {
    		title : '',
    		amount : 0,
    		description : ''
    	};
    };
    
  });
