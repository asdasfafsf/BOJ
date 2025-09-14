const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const T = parseInt(input[0]);
for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(`Case ${i}: ${a + b}`);
}