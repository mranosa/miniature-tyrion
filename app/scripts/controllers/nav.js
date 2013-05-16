'use strict';

angular.module('miniatureTyrionApp')
  .controller('NavCtrl', function ($scope, $location, $rootScope, localStorageService) {
  	$scope.navProp = {
  		hidden : true
  	};

    $scope.navs = [
	  	{
	  		name: 'Home',
	  		url: '#/home',
	  		iconCls: 'icofont-dashboard'
	  	}, {
	  		name: 'Campaigns',
	  		url: '#/campaigns',
	  		iconCls: 'icofont-group'
	    }, {
	  		name: 'Payments',
	  		url: '#/payments',
	  		iconCls: 'icofont-cloud-download'
	    }, {
	  		name: 'Donations',
	  		url: '#/donations',
	  		iconCls: 'icofont-cloud-upload'
	    }
	  ];

	  $scope.updateActiveNav = function(){
	    var navs = _.map($scope.navs, 
	      function(nav){ 
	        nav.navCls = '';
	        if($location.path() !== '/' && nav.url.indexOf($location.path()) === 1) {
	          nav.navCls = 'active';
	        }

	        return nav; 
	      }
	    );
	  };

	  $scope.showNav = function(){
	  	$scope.navProp.hidden = false;
	  };

	  $scope.hideNav = function(){
	  	$scope.navProp.hidden = true;
	  };

	  $scope.$on('update_active_nav', $scope.updateActiveNav);
	  $scope.$on('show_nav', $scope.showNav);
	  $scope.$on('hide_nav', $scope.hideNav);

	  $scope.$on('user_logged_in', function(){
	  	$rootScope.user = localStorageService.get('user');
	  	$rootScope.userName = localStorageService.get('user_name');
	  	$rootScope.userDisplayName = localStorageService.get('user_display_name');
	  });
  });
