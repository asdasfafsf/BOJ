const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

console.log(input.slice(0, 3) === '555' ? 'YES' : 'NO');