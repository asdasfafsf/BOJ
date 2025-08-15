const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const n = Number(input[0]);
for (let i = 1; i <= n; i++) {
    const [X, Y] = input[i].split(' ').map(Number);
    console.log(X >= Y ? 'MMM BRAINS' : 'NO BRAINS');
}