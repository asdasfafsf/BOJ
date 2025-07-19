const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const B = parseInt(input[0]);
const A = B * 10 / 11;
console.log(A);