const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const n = parseInt(input[0]);
const coins = input[1].split(' ').map(Number);

const ones = coins.filter(x => x === 1).length;
const zeros = n - ones;

console.log(Math.min(ones, zeros));