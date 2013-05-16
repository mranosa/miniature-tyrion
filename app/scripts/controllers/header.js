'use strict';

angular.module('miniatureTyrionApp')
  .controller('HeaderCtrl', function ($scope) {
  	$scope.headerProp = {
  		hideRightPanel : true
  	}
  	
    $scope.$on('user_logged_in', function(){
    	$scope.headerProp.hideRightPanel = false;
    });
  });
