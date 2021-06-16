const { readFileSync , writeFileSync } =  require('fs')

console.log("Start the task");
const first  = readFileSync('./content/first.txt', 'utf8');
const second  = readFileSync('./content/second.txt', 'utf8');

console.log(first,second)


writeFileSync('./content/result-write.txt',`Here is the result : ${first} , ${second}`, {flag:'a'})

console.log("Done With the task");
console.log("Starting the next task");
