#!/usr/bin/env node
var program = require('commander');

program
  .version('0.0.1')
  .option('-j, --json-summary <path>', 'Path to json-summary reported by istanbul. Defaults to coverage/coverage-summary.json', 'coverage/coverage-summary.json')
  .parse(process.argv);

console.log(program.jsonSummary);
