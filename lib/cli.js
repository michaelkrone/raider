#! /usr/bin/env node

var create = require('./index.js');
var argv = require('minimist')(process.argv.slice(2));
console.log(create(argv._[0], argv.adverb, argv.mood));