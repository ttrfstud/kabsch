function translateby(amount, set) {
	var len;
	var i;
	var tset;

	len = set[0].length;
	trset = [
		[],
		[],
		[]
	];

	for (i = 0; i < len; i++) {
		trset[0][i] = set[0][i] - amount[0];
		trset[1][i] = set[1][i] - amount[1];
		trset[2][i] = set[2][i] - amount[2];
	}

	return trset;
}

module.exports = translateby;