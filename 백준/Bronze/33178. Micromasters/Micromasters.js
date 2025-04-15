const fs = require('fs');
const n = +fs.readFileSync(0, 'utf-8').trim();
console.log(Math.floor(n * 0.1));