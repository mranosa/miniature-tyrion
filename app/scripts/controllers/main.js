'use strict';

angular.module('miniatureTyrionApp')
  .controller('MainCtrl', function ($scope, localStorageService, $location) {
    
    var userInStore = localStorageService.get('user');

    if(userInStore){
    	//TODO go to dashboard
    	$location.path('/home')
    } else {
    	//TODO go to login
    	$location.path('/login');
    }

  });
