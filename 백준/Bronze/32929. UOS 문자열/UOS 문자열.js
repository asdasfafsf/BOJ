const fs = require('fs');
const x = +fs.readFileSync(0, 'utf-8');
const str = 'UOS';
console.log(str[(x - 1) % 3]);