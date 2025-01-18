const input = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n');

const [C, N] = input[0].split(' ').map(Number);
const dp = Array(C + 100).fill(Infinity);

dp[0] = 0;

for (let i = 1; i <= N; i++) {
    const [pay, customer] = input[i].split(' ').map(Number);

    for (let j = customer; j <= C + 99; j++) {
        dp[j] = Math.min(dp[j], dp[j - customer] + pay);
    }
}

console.log(Math.min(...dp.slice(C)));