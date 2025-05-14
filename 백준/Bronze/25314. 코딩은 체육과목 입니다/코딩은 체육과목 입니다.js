const input = require('fs').readFileSync(0).toString().trim();
const n = Number(input);
console.log('long '.repeat(n / 4) + 'int');