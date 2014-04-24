var assert = require('assert');

module.exports = function (v1, v2) {
	assert(v1);
	assert(v2);

	return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
};