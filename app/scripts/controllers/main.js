'use strict';

angular.module('miniatureTyrionApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    var userInStore = localStorageService.get('user');

    if(userInStore){
    	//TODO go to dashboard
    } else {
    	//TODO go to login
    }

  });
