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

	let adverb = _.sample(_.filter(adverbs, c => c[0] === startChar));
	let animal = _.sample(_.filter(animals, c => c[0] === startChar));

	if (!adverb || !animal) {
		throw new Error(`Cannot generate a funny alliteration with '${char}'! Try some of these: a, b, c`);
	}

	adverb[0] = adverb[0].toUpperCase();
	animal[0] = animal[0].toUpperCase();

	return `${adverb} ${animal}`;
}
