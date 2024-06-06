
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = Number(input[0]);
const trains = input[1].split(' ').map(Number);
const max = Number(input[2]);

const prefixSum = [0];

for (let i = 0; i < trains.length; i++) {
    prefixSum.push(prefixSum.at(-1) + trains[i]);
}

const dp = Array.from(Array(4), () => Array.from(Array(N), () => 0));


for (let i = 1; i < 4; i++) {
    for (let j = i * max; j <= N; j++) {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j - max] + (prefixSum[j] - prefixSum[j - max]))
    }
}

console.log(dp[3].at(-1))