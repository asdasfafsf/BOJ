const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

const dp = Array(k + 1).fill(Infinity);
dp[0] = 0;

for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    for (let j = coin; j <= k; j++) {
        dp[j] = Math.min(dp[j - coin] + 1, dp[j]);
    }
}

console.log(dp[k] === Infinity ? '-1' : dp[k])