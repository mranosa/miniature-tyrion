'use strict';

angular.module('miniatureTyrionApp')
  .factory('NavService', function ($rootScope) {
    var NavService = function() {
    };

    NavService.prototype = {
      updateActiveNav: function(){
        $rootScope.$broadcast('update_active_nav');
      },
      showNav: function(){
        $rootScope.$broadcast('show_nav');
      },
      hideNav: function(){
        $rootScope.$broadcast('hide_nav');
      }
    }

    return new NavService();
  });
