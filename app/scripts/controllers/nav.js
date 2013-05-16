'use strict';

angular.module('miniatureTyrionApp')
  .controller('NavCtrl', function ($scope, $location) {
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

	  $scope.$on('update_active_nav', $scope.updateActiveNav);
  });
