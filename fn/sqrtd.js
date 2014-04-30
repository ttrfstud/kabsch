function sqrtd(dm) {
  var sdm;
  var dim;
  var i, j;

  dim = dm.length;
  sdm = [];

  for (i = 0; i < dim; i++) {
    for (j = 0; j < dim; j++) {
      if (!sdm[i]) {
        sdm[i] = [];
      }
      if (i !== j) {
        sdm[i][j] = 0;
      } else {
        sdm[i][j] = Math.sqrt(dm[i][j]);
      }
    }
  }

  return sdm;
}

module.exports = sqrtd;