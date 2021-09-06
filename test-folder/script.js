//const consoleFormatter = require('console-formatter');
const printTitle = require('console-formatter').printTitle;
const printMsg = require('console-formatter').printMsg;



printTitle('Show Demo of Options')
printMsg('Successful command', 0)
printMsg('Failed on exit', 1)
printMsg('There is a warning somewhere', 2)
printMsg('Show an infomrational', 3)
console.log('\n')
