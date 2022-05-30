#! /usr/bin/env node

const { program } = require('commander');
const checkNodeVersion = require('./commands/checkNodeVersion');
program.version('1.0.0');

// program
//     .command('i')
//     .description('Checks if the version of node is installed')
//     .action(checkNodeVersion);

// program
//     .command('-update')
//     .description('Updates the version of node')
//     .action(updateNodeVersion);

program.parse(process.argv);
