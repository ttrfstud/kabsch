var assert = require('assert');
var computee0 = require('../computee0');

describe('computee0', function () {
  it('size 3 test', function (done) {
    var set1 = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ];

    assert.equal(computee0(set1, set1), 190);

    done();
  });  

  it('size 1 test', function (done) {
    var set1 = [
      [1], [2], [3]
    ];

    assert.equal(computee0(set1, set1), 28);

    done();
  });

  it('size 5 test', function (done) {
    var set1 = [
      [1, 4, 7, 8, 5],
      [2, 5, 8, 7, 4],
      [3, 6, 9, 6, 3]
    ];

    assert.equal(computee0(set1, set1), 968 / 5);

    done();
  });
});