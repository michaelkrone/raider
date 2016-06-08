'use strict';

const _ = require('lodash');
const adjectives = require('../data/adjectives');
const adverbs = require('../data/adverbs').words;
const animals = require('../data/animals').words;
const chars = 'abcdefghijklmnopqrstuvwxyz';
const moods = ['realistic', 'utopic'];

module.exports = createAnAnimalAlliteration;

function createAnAnimalAlliteration(char, useAdverb, mood) {
	char = char || randChar();
	char = char.toLowerCase()[0];
	
	mood = mood || moods[0];
	
	if (!_.includes(moods, mood)) {
		throw new Error(`Do not recognize the demanded '${mood}' mood! Use one of these: ${moods.join(',')}`);
	}

	const adjective =  randWord(char, adjectives[mood]);
	const adverb = useAdverb ?  randWord(char, adverbs) : '';
	const animal =  randWord(char, animals);

	if ((useAdverb && !adverb) || !adjective || !animal) {
		throw new Error(`Cannot generate a funny alliteration with '${char}'! Try some of these: a, b, c`);
	}

	return `${_.capitalize(adverb)} ${_.capitalize(adjective)} ${_.capitalize(animal)}`.trim();
}

function randChar() {
	return chars.charAt(Math.floor(Math.random() * chars.length));;	
}

function randWord(char, words) {
	return _.sample(_.filter(words, c => c[0] === char));
}