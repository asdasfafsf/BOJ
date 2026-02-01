const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

const A = input[0];
const B = input[1];

console.log(Math.max(A, B).toString());