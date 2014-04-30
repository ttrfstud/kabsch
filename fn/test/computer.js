var assert = require('assert');
var computer = require('../computer');

describe('computer', function () {
  it('2x3 case', function (done) {
    var X, Y;

    X = [
      [1, 4],
      [2, 5],
      [3, 6]
    ];

    Y = [
      [1, 7],
      [3, 9],
      [5, 2]
    ];

    assert.deepEqual(computer(X, Y), [
      [29, 37, 45],
      [39, 51, 63],
      [13, 20, 27]
    ]);

    done();
  });


  it('5x3 case', function (done) {
    var X, Y;

    X = [
      [1, 4, 2, 6, 1 ],
      [2, 5, 8, 1, 4 ],
      [3, 6, 9, 0, 12]
    ];

    Y = [
      [1, 7, 1, 1, 2],
      [3, 9, 5, 8, 4],
      [5, 2, 3, 5, 9]
    ];

    assert.deepEqual(computer(X, Y), [
      [39,  54,  78 ],
      [101, 115, 156],
      [58,  85,  162]
    ]);

    done();
  });
});