function transpose(m) {
  var mt;

  var rows;
  var cols;

  var i, j;

  mt = [];

  rows = m.length;
  cols = m[0].length;

  for (j = 0; j < cols; j++) {
    for (i = 0; i < rows; i++) {
      if (!mt[j]) {
        mt[j] = [];
      }

      mt[j][i] = m[i][j];
    }
  }

  return mt;
}

module.exports = transpose;