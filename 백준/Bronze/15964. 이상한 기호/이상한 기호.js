const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
const [A, B] = input;
console.log((A + B) * (A - B));