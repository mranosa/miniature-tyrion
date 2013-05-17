'use strict';

angular.module('miniatureTyrionApp')
  .controller('HomeCtrl', function ($scope, NavService, $rootScope, firebaseCollection, firebaseBinding, localStorageService) {
    NavService.updateActiveNav();
    $rootScope.$broadcast('user_logged_in');

    var url = 'https://bayanhero.firebaseIO.com/campaigns';
    $scope.items = firebaseCollection(url);

  });
