const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

const A = input[0], B = input[1], C = input[2], D = input[3];

const moveCase1 = A + D; 
const moveCase2 = B + C; 

console.log(Math.min(moveCase1, moveCase2));