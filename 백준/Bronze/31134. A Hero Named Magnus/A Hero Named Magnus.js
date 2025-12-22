const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const T = parseInt(input[0]);
for (let i = 1; i <= T; i++) {
    const x = parseInt(input[i]);
    console.log(2 * x - 1);
}