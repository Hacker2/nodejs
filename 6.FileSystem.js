const fs = require('fs');

fs.readFile('file.txt', (err,content) => {
 if(err) return console.error(err);
 console.log(content);
});

fs.readFile('file.txt', {encoding: 'utf8'}, (err,content) => {
 if(err) return console.error(err);
 console.log(content);
});

fs.readdir('.', (err, files) => {
  console.log(files);
});

//var readable = fs.createReadStream('file.txt', { encoding: 'utf8', highWaterMark: 16 *1024 });
var readable = fs.createReadStream('file.txt', { encoding: 'utf8' });
var writable = fs.createWriteStream('file2.txt');
readable.pipe(writable);
readable.on('data', function(chunk) {writable.write(chunk);});

try {
  console.log('first', fs.readFileSync('file.txt', { encoding: 'utf8' }));
} catch(err) {
  console.error(err);
}

fs.access('file.txt', fs.constants.F_OK, (err) => {
 console.log('can read write')
});
fs.access('file.txt', fs.constants.R_OK, (err) => {
 console.log('can read')
});
fs.access('file.txt', fs.constants.W_OK, (err) => {
 console.log('can write')
});
fs.access('file.txt', fs.constants.X_OK, (err) => {
 console.log('can execute')
});

try{
 fs.accessSync('file.txt', fs.constants.X_OK);
 console.log('can execute');
}catch(err) {
 console.error(err);
}

fs.stat('file.txt', function(err) {
if (!err) {
  console.log('file or directory exists');
} else if (err.code === 'ENOENT') {
  console.log('file or directory does not exist');
}
});

try {
 fs.statSync('file.txt');
 console.log('file or directory exists');
} catch (err) {
if (err.code === 'ENOENT') {
  console.log('file or directory does not exist');
}}

fs.writeFile('file3.txt', 'hello world!', function(err) {
  if(err) return console.error(err);
});

try {
  fs.writeFileSync('file4.txt', 'hello world');
} catch(err) {
  console.error(err);
}

fs.readFile('file4.txt', 'utf-8', function(err, data) {
var newValue = data.replace('hello', 'hi');
fs.writeFile('file4.txt', newValue, 'utf-8', function(err, data) {
  console.log('Done!');
})
})

fs.unlink('file3.txt', function(err) {
  console.log('file deleted');
});

fs.unlinkSync('file4.txt');