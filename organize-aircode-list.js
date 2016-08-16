const aircodes = require('./airport-codes');

const arrOfCitiesAndCodes = aircodes.split('\n')
.filter(line => /[\(\)]/.test(line))
.map(line => convertLine(line));

function convertLine(line) {
	let city = line.match(/[A-Za-z\s]+/)[0];
	let aircode = line.match(/\((.+)\)/)[1];
	return { city, aircode }
};

module.exports = arrOfCitiesAndCodes;