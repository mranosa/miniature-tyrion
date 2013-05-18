'use strict';

describe('Controller: CampaignDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('miniatureTyrionApp'));

  var CampaignDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CampaignDetailCtrl = $controller('CampaignDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
