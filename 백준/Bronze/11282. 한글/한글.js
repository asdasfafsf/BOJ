const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const N = Number(input);
console.log(String.fromCharCode(0xAC00 + N - 1));