const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const wealth = input[1].split(' ').map(Number);

const totalWealth = wealth.reduce((acc, val) => acc + val, 0);
wealth.sort((a, b) => b - a);

let sum = 0;
let maxDiff = 0;

for (let i = 0; i < N; i++) {
    sum += wealth[i];
    const x = ((i + 1) / N) * 100;
    const y = (sum / totalWealth) * 100;
    
    maxDiff = Math.max(maxDiff, y - x);
}

console.log(maxDiff.toFixed(6));