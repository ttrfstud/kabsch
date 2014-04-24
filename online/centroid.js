module.exports = function (pcentroid, plen, v) {
	var centroid = {};

	centroid.x = pcentroid.x * plen + v.x;
	centroid.y = pcentroid.y * plen + v.y;
	centroid.z = pcentroid.z * plen + v.z;

	centroid.x /= plen + 1;
	centroid.y /= plen + 1;
	centroid.z /= plen + 1;

	return centroid;
};