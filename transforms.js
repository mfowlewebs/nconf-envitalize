var capSep = /([A-Z])/g;

// Seen frequently in JSON, decamel expands out capital letters
function decamel(input) {
	return input.charAt(0) + input.slice(1).replace(capSep, '_$1');
}
module.exports.decamel = decamel;

// Seen frequently in args, underbar converts - to _
function underbar(input) {
	return input.replace('-', '_');
}
module.exports.underbar = underbar;

function prefix(input) {
	return this.prefix + input;
}
module.exports.prefix = prefix;

// Env vars are typically caps
function caps(input) {
	return input.toUpperCase();
}
module.exports.caps = caps;
