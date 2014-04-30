var assert = require('assert');
var sqrtd = require('../sqrtd');

describe('sqrtd', function () {
  it('3x3', function (done) {
    var m;

    m = [
      [4, 0,  0],
      [0, 16, 0],
      [0, 0, 25]
    ];

    assert.deepEqual(sqrtd(m), [
      [2, 0, 0],
      [0, 4, 0],
      [0, 0, 5]
    ]);

    done();
  });

  it('3x3, some are zeros', function (done) {
    var m;

    m = [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    assert.deepEqual(sqrtd(m), [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);

    done();
  });
});