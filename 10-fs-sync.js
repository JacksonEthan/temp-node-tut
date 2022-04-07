const {readFileSync, writeFileSync} = require('fs'); //note: the "{}" section, is destructuring a built in module
console.log('start');
//reading file text content
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//console.log(first, second)
writeFileSync('./content/result-sync.txt', 
`Here is the result : ${first}, ${second}`, 
{ flag: 'a' })//this writes to a new file and inputs what is in the "()". the flag adds to the reults text file

console.log('done with this task');
console.log('starting the next task');