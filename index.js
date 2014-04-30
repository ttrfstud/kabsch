var assert = require('assert');

var mmult = require('mmult');
var transpose = require('transpose');
var jae = require('jacobi-eigenvalue');

var centroid = require('./fn/centroid');
var translateby = require('./fn/translateby');
var computer = require('./fn/computer');
var computee0 = require('./fn/computee0');
var det3x3 = require('./fn/det3x3');
var beautify = require('./fn/beautify');
var sqrtd = require('./fn/sqrtd');
var invertd = require('./fn/invertd');

function kabsch(m1, m2) {
  var centroid1;
  var centroid2;

  var nump;

  var e0;
  var r, rw, v;
  var eigenres;
  var eigenvals;
  var eigenvect;

  var detw, detv;
  var omega;
  var sigma, isigma;

  var rmsd;

  assert.equal(m1[0].length, m2[0].length);

  nump = m1[0].length;

  centroid1 = centroid(m1);
  centroid2 = centroid(m2);

  m1 = translateby(centroid1, m1);
  m2 = translateby(centroid2, m2);

  e0 = computee0(m1, m2);

  r = computer(m1, m2);

  eigenres = jae(mmult(transpose(r), r), 0);

  eigenvals = eigenres.vals;
  eigenvect = eigenres.vect;

  // RtR = Wt*S^2*W. W is eigenvect, S^2 is eigenvals.
  // R = VSWt => RW = VS and we can find V from RW
  // V = RWS-1

  eigenvals = beautify(eigenvals);

  sigma = sqrtd(eigenvals);
  isigma = invertd(sigma);

  v = mmult(mmult(r, eigenvect), isigma);

  detw = det3x3(eigenvect);
  detv = det3x3(v);

  if (detw * detv < 0) {
    omega = -1;
  } else {
    omega = 1;
  }

  rmsd = Math.sqrt(e0 - (sigma[0][0] + sigma[1][1] + sigma[2][2] * omega) / 
    nump);

  return rmsd;
}

module.exports = kabsch;