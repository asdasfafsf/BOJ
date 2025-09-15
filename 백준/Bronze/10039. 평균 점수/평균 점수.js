const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

let sum = 0;
for (let i = 0; i < 5; i++) {
    let score = Number(input[i]);
    if (score < 40) score = 40;
    sum += score;
}
console.log(sum / 5);