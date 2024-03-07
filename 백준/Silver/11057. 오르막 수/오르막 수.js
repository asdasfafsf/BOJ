
const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()

const n = +input;
const dp = Array.from({length: n + 1}, () => Array.from({length: 10}, () => 1))


for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 10007;
    }
}

console.log(dp[n][9])