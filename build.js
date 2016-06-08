#! /usr/bin/env node
'use strict';

const fs = require('fs');
const _ = require('lodash');

const words = {
	adjectives: require('./data/adjectives'),
	adverbs: require('./data/adverbs'),
	animals: require('./data/animals')
};

_.forEach(words, build);
_.forEach(words, write);

function build(data) {
	_.forEach(data, function (words, category, object) {
		object[category] = _.chain(words)
			.map(w => w.toLowerCase())
			.map(w => w.trim())
			.uniq()
			.sort()
			.value();
	});
}

function write(words, type) {
	const fileName = `./data/${type}.json`;

	try {
		fs.writeFileSync(fileName, JSON.stringify(words, null, '\t'));
		console.log('Data written to %s', fileName);
	} catch(e) {
		console.error('Cannot write %s data file to %s', type, fileName);
		throw e;
	}
}