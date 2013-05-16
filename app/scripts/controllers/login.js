'use strict';

angular.module('miniatureTyrionApp')
  .controller('LoginCtrl', function ($scope, AuthService, NavService) {
  	NavService.hideNav();
  	
    $scope.signIn = function(){
		AuthService.login();
	};
  });
