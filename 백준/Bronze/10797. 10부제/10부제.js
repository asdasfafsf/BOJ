const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/);

const day = Number(input[0]);
let count = 0;
for (let i = 1; i <= 5; i++) {
    if (Number(input[i]) === day) count++;
}
console.log(count);