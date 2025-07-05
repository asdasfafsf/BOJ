const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const R = parseInt(input[0]);
const S = parseInt(input[1]);

const totalCupcakes = R * 8 + S * 3;
const leftover = totalCupcakes - 28;

console.log(leftover);