const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim();



const n = +input;
const dp = [0, 1, 1, 2, 3, 4];

for (let i = dp.length - 1; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 3]) % 1000000009
}

console.log(dp[n]);