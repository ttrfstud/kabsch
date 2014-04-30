function computee0(set1, set2) {
	var len;
	var i;
	var e0;

	len = set1[0].length;

	e0 = 	set1[0][0] * set1[0][0] + set2[0][0] * set2[0][0] + 
				set1[1][0] * set1[1][0] + set2[1][0] * set2[1][0] + 
				set1[2][0] * set1[2][0] + set2[2][0] * set2[2][0];

	for (i = 1; i < len; i++) {
		e0 = (e0 * i + 
			set1[0][i] * set1[0][i] + set2[0][i] * set2[0][i] +
			set1[1][i] * set1[1][i] + set2[1][i] * set2[1][i] +
			set1[2][i] * set1[2][i] + set2[2][i] * set2[2][i]) / (i + 1);
	}

	return e0;
}

module.exports = computee0;