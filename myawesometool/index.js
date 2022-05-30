#!/usr/bin/env node

const { program } = require('commander');
const checkNodeVersion = require('./commands/checkNodeVersion.js');
const updateNodeVersion = require('./commands/updateNodeVersion.js');

program
.version('1.0.0');

program
    .option('-i , --inspect ', 'check node version')
    .description('Checks if the version of node is installed')
    .action((arg)=>{
        checkNodeVersion(arg);
    });

program
    .option('-u, --update', 'update node version')
    .description('Checks if the version of node is installed')
    .action(updateNodeVersion)
    
program.parse(process.argv);
