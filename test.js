import test from 'ava';
import pathExists from 'path-exists';
import fn from './';

test(t => {
	const homeDir = fn();
	t.true(homeDir.length > 0);
	t.true(pathExists.sync(homeDir));
});
