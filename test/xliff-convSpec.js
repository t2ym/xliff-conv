var assert = require('assert');

var xliffConv = require('../xliff-conv');

describe('xliff-conv', function () {

  var myinstance = new xliffConv();

  it('should have someProperty', function () {
    assert.equal(myinstance.someProperty, 'value');
  });

  it('should run someMethod', function () {
    assert.equal(myinstance.someMethod('hello '), 'hello value');
  });

});

