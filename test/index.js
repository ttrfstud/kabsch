var assert = require('assert');
var kabsch = require('../');

describe('kabsch', function () {
  it('manual to computer test', function () {
    var set1;
    var set2;

    set1 = [
      [8,   2],
      [5,   9],
      [-1, 12]
    ];

    set2 = [
      [9,  10],
      [11, 12],
      [13, 14]
    ];

    console.log();

    assert(Math.abs(kabsch(set1, set2) - 18.85) < .01);

    done();
  });

  it.skip('manual to computer test 2', function () {
    var set1;
    var set2;

    set1 = [
      [8,   2, 5, 4],
      [5,   9, 5, 3],
      [-1, 12, 4, 4]
    ];

    set2 = [
      [9,  10, 1, 3],
      [11, 12, 5, 3],
      [13, 14, 5, 2]
    ];

    assert(Math.abs(kabsch(set1, set2) - 1) < .01);

    done();
  });
});