function translateby(amount, set) {
	var len;
	var i;
	var tset;

	len = set.length;
	tset = [];

	for (i = 0; i < len; i++) {
		tset[i] = [];
		tset[i].push(set[i][0] - amount[0]);
		tset[i].push(set[i][1] - amount[1]);
		tset[i].push(set[i][2] - amount[2]);
	}

	return tset;
}

module.exports = translateby;