const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n');

const a = BigInt(input[0]);
const b = BigInt(input[1]);
const c = BigInt(input[2]);

const x = (b - c) / a;

console.log(x.toString());