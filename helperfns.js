const capitalize = str => {
	return str.split('').map((c,i) => i === 0 ? c.toUpperCase() : c)
				.reduce((a,b) => '' + a + b)
}

module.exports = { capitalize }