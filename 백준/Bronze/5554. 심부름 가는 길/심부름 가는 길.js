const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const total = input.map(Number).reduce((a, b) => a + b, 0);
const x = Math.floor(total / 60);
const y = total % 60;
console.log(x + '\n' + y);