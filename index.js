#!/usr/bin/env node
var program = require('commander');
var path = require('path');

program
  .version('0.0.1')
  .option('-j, --json-summary <path>', 'Path to json-summary reported by istanbul. Defaults to coverage/coverage-summary.json', 'coverage/coverage-summary.json')
  .option('-t, --type <type>', 'Coverage type: lines, statements, functions or branches. Defaults to lines.', /^(lines|statements|functions|branches)$/i, 'lines')
  .option('-k, --key <private key>', 'Umbo private key.')
  .parse(process.argv);

var summary = require(path.resolve(program.jsonSummary));

console.log(program.type);
console.log(summary.total[program.type.toLowerCase()].pct);
