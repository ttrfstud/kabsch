var assert = require('assert');
var translateby = require('../translateby');

describe('translateby', function () {
  it('zero-move case', function (done) {
    var amount;
    var set;
    
    amount = [0, 0, 0];
    set = [
      [1, 3, 5, 3, 2, 4, 2],
      [3, 4, 7, 9, 4, 3, 5],
      [3, 4, 3, 2, 5, 6, 2]
    ];

    assert.notEqual(translateby(amount, set), set);
    assert.deepEqual(translateby(amount, set), set);

    done();
  });

  it('not-zero-move case', function (done) {
    var amount;
    var set;
    var trset;
    
    amount = [1, 3, 4];
    set = [
      [1, 3, 5, 3, 2, 4, 2],
      [3, 4, 7, 9, 4, 3, 5],
      [3, 4, 3, 2, 5, 6, 2]
    ];

    trset = [
      [0,  2,  4,  2, 1, 3,  1],
      [0,  1,  4,  6, 1, 0,  2],
      [-1, 0, -1, -2, 1, 2, -2]
    ];

    assert.deepEqual(translateby(amount, set), trset);

    done();
  });
});