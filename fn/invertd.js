function invertd(dm) {
  var idm;
  var dim;
  var i, j;

  dim = dm.length;
  idm = [];

  for (i = 0; i < dim; i++) {
    for (j = 0; j < dim; j++) {
      if (!idm[i]) {
        idm[i] = [];
      }
      if (i !== j || !dm[i][j]) {
        idm[i][j] = 0;
      } else {
        idm[i][j] = 1 / dm[i][j];
      }
    }
  }

  return idm;
}

module.exports = invertd;