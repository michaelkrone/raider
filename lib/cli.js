#! /usr/bin/env node

const create = require('./index.js');
const argv = require('minimist')(process.argv.slice(2));
console.log(create(argv._[0], argv.adverb));