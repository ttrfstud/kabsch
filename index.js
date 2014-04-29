var centroid = require('./fn/centroid');
var translateby = require('./fn/translateby');
var computer = require('./fn/computer');
var computee0 = require('./fn/computee0');
var det3x3 = require('./fn/det3x3');

function kabsch(m1, m2) {
  var centroid1;
  var centroid2;

  var e0;
  var r, rw, v;
  var eigenres;
  var eigenvals;
  var eigenvect;

  var i, j;
  var dim;

  var detw, detv;
  var omega;
  var sigma;

  var rmsd;

  assert.equal(m1.length, m2.length);

  centroid1 = centroid(m1);
  centroid2 = centroid(m2);

  m1 = translateby(centroid1, m1);
  m2 = translateby(centroid2, m2);

  e0 = computee0(m1, m2);

  r = computer(m1, m2);

  dim = r.length;

  eigenres = jae(mult(transpose(r), r));

  eigenvals = eigenres.vals;
  eigenvect = eigenres.vect;

  // RtR = Wt*S^2*W. W is eigenvect, S^2 is eigenvals.
  // R = VSWt => RW = VS and we can find V from RW

  assert(eigenvals[0][0] > 0);
  assert(eigenvals[1][1] > 0);
  assert(eigenvals[2][2] > 0);

  rw = mult(r, eigenvect);

  sigma = [];

  sigma[0] = Math.sqrt(eigenvals[0][0]);
  sigma[1] = Math.sqrt(eigenvals[1][1]);
  sigma[2] = Math.sqrt(eigenvals[2][2]);

  for (j = 0; j < dim; j++) {
    for (i = 0; i < dim; i++) {
      v[i][j] = rw[i][j] / sigma[j];
    }
  }

  detw = det3x3(eigenvect);
  detv = det3x3(v);

  if (detw * detv < 0) {
    omega = -1;
  } else {
    omaga = 1;
  }

  rmsd = Math.sqrt(e0 - (sigma[0] + sigma[1] + sigma[2] * omega) / set1.length);
}

module.exports = kabsch;