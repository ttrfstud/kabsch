var assert = require('assert');

module.exports = function (v) {
	var len;
	var newv;

	assert(v);

	newv = {};

	len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z); 

	newv.x = v.x / len;
	newv.y = v.y / len;
	newv.z = v.z / len;

	return newv;
};