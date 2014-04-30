var assert = require('assert');
var invertd = require('../invertd');

describe('invertd', function () {
  it('no zeros, 3x3', function (done) {
    var m;

    m = [
      [0.5, 0, 0 ],
      [0, .25, 0 ],
      [0, 0, .125]
    ];

    assert.deepEqual(invertd(m), [
      [2, 0, 0],
      [0, 4, 0],
      [0, 0, 8]
    ]);

    done();
  });

  it('some zeros, 3x3', function (done) {
    var m;

    m = [
      [0, 0,   0],
      [0, .25, 0],
      [0, 0,   0]
    ];

    assert.deepEqual(invertd(m), [
      [0, 0, 0],
      [0, 4, 0],
      [0, 0, 0]
    ]);

    done();
  });
});