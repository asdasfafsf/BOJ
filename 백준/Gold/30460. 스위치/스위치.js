const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const scores = input[1].split(' ').map(Number);
const dp = Array.from(Array(4), () => Array(N + 1).fill(-Infinity));

dp[3][0] = 0;

dp[0][1] = dp[3][0] + scores[0] * 2;
dp[3][1] = dp[3][0] + scores[0];

dp[0][2] = Math.max(dp[3][1] + scores[1] * 2, dp[2][1] + scores[1] * 2);
dp[1][2] = dp[0][1] + scores[1] * 2;
dp[3][2] = Math.max(dp[2][1] + scores[1], dp[3][1] + scores[1]);

dp[0][3] = Math.max(dp[3][2] + scores[2] * 2, dp[2][2] + scores[2] * 2);
dp[1][3] = dp[0][2] + scores[2] * 2;
dp[2][3] = dp[1][2] + scores[2] * 2;
dp[3][3] = Math.max(dp[2][2] + scores[2], dp[3][2] + scores[2]);


for (let i = 4; i <= N; i++) {
    const score = scores[i - 1];
    dp[0][i] = Math.max(dp[3][i - 1] + score * 2, dp[2][i - 1] + score * 2);
    dp[1][i] = dp[0][i - 1] + score * 2;
    dp[2][i] = dp[1][i - 1] + score * 2;
    dp[3][i] = Math.max(dp[2][i - 1] + score, dp[3][i - 1] + score);
}

console.log(Math.max(dp[0][N], dp[1][N], dp[2][N], dp[3][N]));