var t = require('./transforms');

function envitalize(prefix, opts) {
	if (typeof(prefix) === 'object' && arguments.length === 1) {
		opts = prefix;
		prefix = null;
	}
	opts = opts || {};
	opts.prefix = prefix ? prefix.toUpperCase() + '_' : opts.prefix || '';
	opts.nconf = opts.nconf || require('nconf');
	opts.storeTypes = opts.storeTypes || ['argv', 'file'];
	opts.transforms = opts.transforms || [t.decamel, t.underbar, t.prefix, t.caps];
	for (var i in opts.nconf.stores) {
		var store = opts.nconf.stores[i];
		if (opts.storeTypes.indexOf(store.type) === -1) {
			continue;
		}
		store = store.store
		for (var key in store) {
			var value = store[key];
			for (var transform in opts.transforms) {
				if (typeof(key) !== 'string') {
					break;
				}
				key = opts.transforms[transform].call(opts, key);
			}
			insureWriteable(opts.nconf);
			opts.nconf.set(key, value);
		}
	}
	return opts.nconf
}
module.exports = envitalize;

function nop(){
}

function insureWriteable(nconf){
	var readOnly = true;
	for (var i in nconf.stores) {
		if (!nconf.stores[i].readOnly) {
			readyOnly = false;
			break;
		}
	}
	if (readOnly) {
		nconf.use('memory');
	}
	insureWriteable = nop;
}
