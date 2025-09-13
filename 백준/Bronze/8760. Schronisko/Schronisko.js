const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const Z = parseInt(input[0]);
const out = [];

for (let i = 1; i <= Z; i++) {
    const [W, K] = input[i].trim().split(' ').map(Number);
    out.push(Math.floor(W * K / 2));
}

console.log(out.join('\n'));