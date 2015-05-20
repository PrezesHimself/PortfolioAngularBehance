'use strict';

describe('Service: Behance', function () {

  // load the service's module
  beforeEach(module('behanceApp'));

  // instantiate service
  var Behance;
  beforeEach(inject(function (_Behance_) {
    Behance = _Behance_;
  }));

  it('should do something', function () {
    expect(!!Behance).toBe(true);
  });

});
