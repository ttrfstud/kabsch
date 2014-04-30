var assert = require('assert');
var round = require('../round');

describe('round', function () {
  it('threshold < CUTOFF_THRESHOLD', function (done) {
    assert.equal(round(1e-9), 1e-9);
    assert.equal(round(-1e-9), -1e-9);

    done();
  });

  it('threshold = CUTOFF_THRESHOLD', function (done) {
    assert.equal(round(1e-10), 0);
    assert.equal(round(-1e-10), 0);

    done();
  });

  it('threshold > CUTOFF_THRESHOLD', function (done) {
    assert.equal(round(1e-11), 0);
    assert.equal(round(-1e-11), 0);

    done();
  });
});