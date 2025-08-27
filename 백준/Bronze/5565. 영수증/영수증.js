const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const total = input[0];
const sumKnown = input.slice(1).reduce((a, b) => a + b, 0);
console.log(total - sumKnown);