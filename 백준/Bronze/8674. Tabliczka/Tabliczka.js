const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(/\s+/)
    .map(Number);

const a = input[0];
const b = input[1];

const diffVertical = b * (a % 2);
const diffHorizontal = a * (b % 2);

console.log(Math.min(diffVertical, diffHorizontal));