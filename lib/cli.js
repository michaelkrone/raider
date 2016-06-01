#! /usr/bin/env node

const create = require('./index.js');
console.log(create(process.argv.slice(2)[0]));