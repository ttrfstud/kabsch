var mmult = require('mmult');
var transpose = require('transpose');

/** compute-r **/
function computer(m1, m2) {
	return mmult(m2, transpose(m1));
}

module.exports = computer;