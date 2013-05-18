'use strict';

angular.module('miniatureTyrionApp')
  .controller('PaymentsCtrl', function ($scope, NavService, firebaseCollection, firebaseBinding, localStorageService) {
    NavService.updateActiveNav();

    var loggedInUser = localStorageService.get('user');
    var url = 'https://bayanhero.firebaseIO.com/user_data/' + loggedInUser + '/payments';
    $scope.items = new firebaseCollection(url);
    
  });
