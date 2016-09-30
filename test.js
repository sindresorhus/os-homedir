import test from 'ava';
import pathExists from 'path-exists';
import m from './';

test(t => {
	const homeDir = m();
	t.true(homeDir.length > 0);
	t.true(pathExists.sync(homeDir));
});
