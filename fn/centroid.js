function centroid(set) {
  var len;
  var centroid;

  var i;

  len = set[0].length;

  centroid = [
    set[0][0],
    set[1][0],
    set[2][0]
  ];

  for (i = 1; i < len; i++) {
    centroid[0] = (centroid[0] * i + set[0][i]) / (i + 1);
    centroid[1] = (centroid[1] * i + set[1][i]) / (i + 1);
    centroid[2] = (centroid[2] * i + set[2][i]) / (i + 1);
  }

  return centroid;
}

module.exports = centroid;