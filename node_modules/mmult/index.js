function mmult(a, b) {
  var c;

  var n, m, l;
  var i, j, k;

  n = a.length;
  m = b.length;
  l = b[0].length;

  c = [];

  for (i = 0; i < n; i++) {
    for (j = 0; j < l; j++) {
      if (!c[i]) {
        c[i] = [];
      }

      c[i][j] = 0;
      for (k = 0; k < m; k++) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return c;
}

module.exports = mmult;