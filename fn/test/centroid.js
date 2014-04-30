var assert = require('assert');
var centroid = require('../centroid');

describe('centroid', function () {
  it('test1', function (done) {
    var set = [
      [1, 2, 5, 1, 6],
      [2, 1, 5 ,1, 6],
      [3, 0, 5, 1, 6]
    ];
    assert.deepEqual(centroid(set), [3, 3, 3]);

    done();
  });

  it('test2', function (done) {
    var set = [
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5, 6],
      [3, 4, 5, 6, 7]
    ];
    assert.deepEqual(centroid(set), [3, 4, 5]);

    done();
  });

  it('test3', function (done) {
    var set = [
      [1, 0, 3, 0, 5],
      [0, 3, 0, 5, 0],
      [3, 0, 5, 0, 7]
    ];
    assert.deepEqual(centroid(set), [9/5, 8/5, 3]);

    done();
  });
});