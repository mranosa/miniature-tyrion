'use strict';

angular.module('miniatureTyrionApp')
  .factory('AuthService', function () {
    var USERS_URL = 'https://bayanhero.firebaseIO.com/users';
    var totalUsersRef = new Firebase('https://bayanhero.firebaseIO.com/metrics/total_users');
    var bayanheroRef = new Firebase('https://bayanhero.firebaseIO.com');
    var authClient = undefined;

    var AuthService = function() {
      authClient = new FirebaseAuthClient(bayanheroRef, function(error, user) {
        if (!error && user) {
          var currentUserRef = new Firebase(USERS_URL + '/' + user.id);
          currentUserRef.once('value', function(data) {
            if(!data.val()){
              currentUserRef.update(user);
              totalUsersRef.transaction(function(current_value) {
                return current_value + 1;
              });
            }
          });
        }
      });
    };

    AuthService.prototype = {
      login: function(){
        authClient.login('facebook');
      }
    }

    return new AuthService();
  });
