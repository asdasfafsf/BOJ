const fs = require('fs');
const N = +fs.readFileSync(0, 'utf-8');
console.log(N - 1946);