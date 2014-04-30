var assert = require('assert');
var det3x3 = require('../det3x3');

describe('det3x3', function () {
  it('test1, singular', function (done) {
    assert.equal(det3x3([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]), 0) 

    done();
  });

  it('test2, singular', function (done) {
    assert.equal(det3x3([
      [1, 3, 3],
      [2, 6, 6],
      [1, 2, 3]
    ]), 0);

    done();
  });

  it('test3', function (done) {
    assert.equal(det3x3([
      [1, 8, 4],
      [3, 2, 4],
      [8, 6, 3]
    ]), 174);

    done();
  });
});