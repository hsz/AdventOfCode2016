#!/usr/bin/env node
'use strict';

var argv   = require('yargs').demand(1).argv
  , colors = require('colors')
  , day    = ('0' + argv._[0]).substr(-2)
  , solution;

process.chdir('./day' + day);
solution   = require('./day' + day)();

console.log('    Advent of Code    '.green.bgBlack);
console.log(('  ------- '.green + day.red + ' -------  '.green).bgBlack);
console.log('======================'.green.bgBlack);
console.log('');
console.log(' Part one: ' + solution.one);
console.log(' Part two: ' + solution.two);
console.log('');

