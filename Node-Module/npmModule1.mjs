// for select the file, we write = cd file name(Node-Module)
// for starting node module we need to write in terminal = (npm init) 


import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

const log = console.log;
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

console.log(chalk.green.bold.bgCyanBright.strikethrough.inverse("Bishal Roy"))


// validator
import validator from 'validator';
const chckValidator=validator.isEmail("broy78244gmai@l.com");
console.log(chckValidator ? chalk.green.inverse(chckValidator) : chalk.red.inverse(chckValidator))



 