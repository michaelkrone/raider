'use strict';

var _ = require('lodash');
var adjectives = require('../data/adjectives');
var adverbs = require('../data/adverbs').words;
var animals = require('../data/animals').words;
var chars = 'abcdefghijklmnopqrstuvwxyz';
var moods = ['realistic', 'utopic'];

module.exports = createAnAnimalAlliteration;

function createAnAnimalAlliteration(char, useAdverb, mood) {
	char = char || randChar();
	char = char.toLowerCase()[0];
	
	mood = mood || moods[0];
	
	if (!_.includes(moods, mood)) {
		throw new Error('Do not recognize the demanded ' + mood + ' mood! Use one of these: ' + moods.join(','));
	}

	var adjective =  randWord(char, adjectives[mood]);
	var adverb = useAdverb ?  randWord(char, adverbs) : '';
	var animal =  randWord(char, animals);

	if ((useAdverb && !adverb) || !adjective || !animal) {
		throw new Error('Cannot generate a funny alliteration with ' + char + '! Try some of these: a, b, c');
	}

	return `${_.capitalize(adverb)} ${_.capitalize(adjective)} ${_.capitalize(animal)}`.trim();
}

function randChar() {
	return chars.charAt(Math.floor(Math.random() * chars.length));;	
}

function randWord(char, words) {
	return _.sample(_.filter(words, function (c) { return c[0] === char; }));
}