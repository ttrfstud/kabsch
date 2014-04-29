function computee0(set1, set2) {
	var len;
	var i;
	var e0;

	len = set1.length;

	e0 = 	set1[0][0] * set1[0][0] + set2[0][0] * set2[0][0] + 
				set1[0][1] * set1[0][1] + set2[0][1] * set2[0][1] + 
				set1[0][2] * set1[0][2] + set2[0][2] * set2[0][2];

	for (i = 1; i < len; i++) {
		e0 = (e0 * i + 
			set1[i][0] * set1[i][0] + set2[i][0] * set2[i][0] +
			set1[i][1] * set1[i][1] + set2[i][1] * set2[i][1] +
			set1[i][2] * set1[i][2] + set2[i][2] * set2[i][2]) / (i + 1);
	}

	return e0;
}