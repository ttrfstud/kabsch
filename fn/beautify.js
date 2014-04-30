var round = require('./round');

function beautify(jaeres) {
  var dm;
  var dim;
  var i, j;

  dim = jaeres.length;

  dm = [];

  for (i = 0; i < dim; i++) {
    for (j = 0; j < dim; j++) {
      if (!dm[i]) {
        dm[i] = [];
      }

      if (i !== j) {
        dm[i][j] = 0;
      } else {
        dm[i][j] = round(jaeres[i][j]);
      }
    }
  }

  return dm;
}

module.exports = beautify;