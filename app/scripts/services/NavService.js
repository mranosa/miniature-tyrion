'use strict';

angular.module('miniatureTyrionApp')
  .factory('NavService', function ($rootScope, $location, localStorageService) {
    var NavService = function() {
    };

    NavService.prototype = {
      updateActiveNav: function(){
        var userInStore = localStorageService.get('user');

        if(!userInStore){
          $location.path('/login');
        } else {
          this.showNav();
          
          if($location.path() === '/'){
            $location.path('/home');
          }
          
          $rootScope.$broadcast('update_active_nav');  
        }
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
