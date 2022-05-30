#!/usr/bin/env node
/*
command structure would be like this:
myawesometool check <input.csv> for <dependency> with <version>
*/

const { program } = require('commander');
const checkNodeVersion = require('./commands/checkNodeVersion.js');
const updateNodeVersion = require('./commands/updateNodeVersion.js');

program
.version('1.0.0')
.description('Checks and updates the version of node installed');

program
  .requiredOption('-c, --check <file>', 'helps to enter the csv file name to be checked')
  .requiredOption('-f, --for <dep>', 'helps to enter the dependency name')
  .requiredOption('-wv, --withVersion <ver>', 'helps to enter the version of the dependency')
  .option('-u, --update', 'update the dependency to the latest version');

program.parse(process.argv);
var count = 3;
const options = program.opts();

const fileName = options.check;
const dependency = options.for;
const version = options.withVersion;

if (options.check){
    // console.log(options.check);
    count--;
}
if (options.for){
    // console.log(options.for);
    count--;
}
if (options.withVersion){
    // console.log(options.withVersion);
    count--;
}
if (options.update){
    // console.log("update");
    count--;
} 

if(count==0){
    checkNodeVersion(fileName, dependency, version);
}
else if(count==-1){
    updateNodeVersion(fileName, dependency, version);
}







