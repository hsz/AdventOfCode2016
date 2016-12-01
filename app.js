#!/usr/bin/env node
'use strict';

import 'colors';
import yargs from 'yargs';

const {argv} = yargs.demand(1);
const day = (`0${argv._[0]}`).substr(-2);

process.chdir(`./day${day}`);
const solution = require(`./day${day}`)();

console.log('    Advent of Code    '.green.bgBlack);
console.log(('  ------- '.green + day.red + ' -------  '.green).bgBlack);
console.log('======================'.green.bgBlack);
console.log('');
console.log(` Part one: ${solution.one}`);
console.log(` Part two: ${solution.two}`);
console.log('');
