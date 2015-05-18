#!/usr/bin/env node

var assert = require('assert');
var fixture = require('./fixture');

require('..')()

console.log('Example of a non-prefixed nconf-envitalize:');
fixture.asserts({
	'THE_HULK': 'green',
	'CAPTAIN_AMERICA': 'shield'
});
console.log();
