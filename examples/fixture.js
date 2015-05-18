var assert = require('assert');
var nconf = require('nconf').argv();

nconf.stores.argv.store['the-hulk'] = 'green';
nconf.stores.argv.store['captainAmerica'] = 'shield';

module.exports = nconf

module.exports.asserts = function(asserts) {
	for (key in asserts) {
		var expect = asserts[key];
		var value = nconf.get(key);
		assert.equal(value, expect, key + ' should be "' + expect + '", is "' + value + '"');
		console.log(key + ' is ' + value);
	};
}
