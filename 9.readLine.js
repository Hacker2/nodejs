const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: fs.createReadStream('file.txt')
});
rl.on('line', (line) => {
 console.log(line);
});
rl.on('close', () => {
 console.log('Done reading file');
});

const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl2.question('What is your name?', (name) => {
  console.log(`Hello ${name}!`);
  rl.close();
});