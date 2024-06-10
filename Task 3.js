// read-file.js
const fs = require('fs');

// Write to welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read and console.log data from hello.txt
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
