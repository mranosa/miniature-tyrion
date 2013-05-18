'use strict';

angular.module('miniatureTyrionApp')
  .controller('DonationsCtrl', function ($scope, NavService, firebaseCollection, firebaseBinding, localStorageService) {
    NavService.updateActiveNav();

    var loggedInUser = localStorageService.get('user');
    var url = 'https://bayanhero.firebaseIO.com/user_data/' + loggedInUser + '/donations';
    $scope.items = new firebaseCollection(url);
  });
