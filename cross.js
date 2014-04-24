var assert = require('assert');

module.exports = function (v1, v2) {
	var newv;

	assert(v1);
	assert(v2);

	newv = {};

	newv.x = v1.y * v2.z - v1.z * v2.y;
	newv.y = v1.z * v2.x - v1.x * v2.z;
	newv.z = v1.x * v2.y - v1.y * v2.y;

	return newv;
};