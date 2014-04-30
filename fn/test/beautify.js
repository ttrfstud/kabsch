var assert = require('assert');
var beautify = require('../beautify');

describe('beautify', function () {
  it('3x3', function (done) {
    var m;

    m = [
      [1e-13, 0.1, 0],
      [0.4, 1000, .1],
      [0.3, 0.21, 11]
    ];

    assert.deepEqual(beautify(m), [
      [0, 0,    0],
      [0, 1000, 0],
      [0, 0,   11]
    ]);

    done();
  });
});
