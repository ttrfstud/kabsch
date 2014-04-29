var assert  = require('assert');
var transpose = require('../');

describe('transpose', function () {
  it('1x1', function (done) {
    assert.deepEqual(transpose([[1]]), [[1]]);
    done();
  });

  it('2x2', function (done) {
    assert.deepEqual(transpose([[1, 2], [3, 4]]), [[1,3],[2,4]]);
    done();
  });

  it('4x4', function (done) {
    assert.deepEqual(transpose([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [8, 4, 5, 6],
      [4, 5, 6, 7]
    ]), [
      [1, 2, 8, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
      [4, 5, 6, 7]
    ])
    done();
  });
});