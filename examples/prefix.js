#!/usr/bin/env node

var assert = require('assert');
var fixture = require('./fixture');

require('..')('example');

console.log('Example of a prefixed nconf-envitalize:');
fixture.asserts({
	'EXAMPLE_THE_HULK': 'green',
	'EXAMPLE_CAPTAIN_AMERICA': 'shield'
});
console.log();
