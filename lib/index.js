'use strict';

const _ = require('lodash');
const adverbs = require('../data/adverbs').adverbs;
const animals = require('../data/animals').animals;
const chars = 'abcdefghijklmnopqrstuvwxyz';

module.exports = createAnAnimalAlliteration;

function createAnAnimalAlliteration(char) {
	char = char || chars.charAt(Math.floor(Math.random() * chars.length));
	char = char.toLowerCase();
	const startChar = char[0];

	const adverb = _.sample(_.filter(adverbs, c => c[0] === startChar));
	const animal = _.sample(_.filter(animals, c => c[0] === startChar));

	if (!adverb || !animal) {
		throw new Error(`Cannot generate a funny alliteration with '${startChar}'! Try some of these: a, b, c`);
	}

	return `${_.capitalize(adverb)} ${_.capitalize(animal)}`;
}
