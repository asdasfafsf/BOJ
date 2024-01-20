
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();


const N = +input;


const dp = Array.from({length: N + 1}, () => 0);
dp[0] = 1;
dp[2] = 3;
for (let i = 4; i <= N; i++) {
    dp[i] = dp[i - 2] * 4 - dp[i - 4];
}

console.log(dp[N]);
