'use strict';
var test = require('ava');
var pathExists = require('path-exists');
var osHomedir = require('./');

test(function (t) {
	var homeDir = osHomedir();
	t.assert(homeDir.length > 0);
	t.assert(pathExists.sync(homeDir));
	t.end();
});
