'use strict';

describe('Controller: DonationsCtrl', function () {

  // load the controller's module
  beforeEach(module('miniatureTyrionApp'));

  var DonationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DonationsCtrl = $controller('DonationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
