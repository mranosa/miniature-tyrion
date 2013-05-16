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
        $("#content-container").attr('class', 'span11');
        $rootScope.$broadcast('show_nav');
      },
      hideNav: function(){
        $("#content-container").attr('class', 'span12');
        $rootScope.$broadcast('hide_nav');
      }
    }

    return new NavService();
  });
