'use strict';

angular.module('miniatureTyrionApp')
  .controller('PaymentsCtrl', function ($scope, NavService, firebaseCollection, firebaseBinding, localStorageService) {
    NavService.updateActiveNav();

    var loggedInUser = localStorageService.get('user');
    var url = 'https://bayanhero.firebaseIO.com/user_data/' + loggedInUser + '/payments';
    $scope.items = new firebaseCollection(url);

    $scope.accept = function(item){
    	var campaignurl = 'https://bayanhero.firebaseIO.com/campaigns/' + item.url;
        var countRef = new Firebase(campaignurl + '/currAmount');
        countRef.transaction(function(current_value) {
          return current_value + parseInt(item.amount);
        });

        item.received = true;
        item.status = 'Received';
        
        $scope.items.$update(item);
    }

  });
