var CUTOFF_THRESHOLD = 1e-10;

function round(n) {
  var floor;
  var ceil;

  floor = Math.floor(n);
  ceil = Math.ceil(n);

  if (Math.abs(floor - n) <= CUTOFF_THRESHOLD) {
    n = floor;
  } else if (Math.abs(ceil - n) <= CUTOFF_THRESHOLD) {
    n = ceil;
  }

  return n;
}

module.exports = round;