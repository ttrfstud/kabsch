var assert = require('assert');

module.exports = function (list) {
	var centroid;
	var item;

	var i;

	assert(list);

	centroid = {};

	centroid.x = 0;
	centroid.y = 0;
	centroid.z = 0;

	for (i = 0; i < list.length; i++) {
		item = list[i];

		assert(item);

		centroid.x += item.x;
		centroid.y += item.y;
		centroid.z += item.z;
	}

	centroid.x /= list.length;
	centroid.y /= list.length;
	centroid.z /= list.length;

	return centroid;
}