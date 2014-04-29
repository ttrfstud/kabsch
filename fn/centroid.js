function centroid(set) {
  var len;
  var centroid;

  var i;

  len = set.length;

  centroid = [
    set[0][0],
    set[0][1],
    set[0][2]
  ];

  for (i = 1; i < len; i++) {
    centroid[0] = (centroid[0] * i + set[i][0]) / (i + 1);
    centroid[1] = (centroid[1] * i + set[i][1]) / (i + 1);
    centroid[2] = (centroid[2] * i + set[i][2]) / (i + 1);
  }

  return centroid;
}

module.exports = centroid;