function det3x3(m) {
	return m[0][0] * (m[1][1] * m[2][2] - m[2][1] * m[1][2]) -
	m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + 
	m[0][2] * (m[1][0] * m[2][1] - m[1][2] * m[2][0]);
}

module.exports = det3x3;