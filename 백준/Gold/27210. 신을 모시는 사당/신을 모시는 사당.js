const [[N], stoneStatues] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const dp = Array(N + 1).fill(0);
const minDp = Array(N + 1).fill(0);
const maxDp = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    const elem = stoneStatues[i - 1];

    if (elem === 1) {
        dp[i] = dp[i - 1] + 1;
    } else {
        dp[i] = dp[i - 1] - 1;
    }

    maxDp[i] = Math.max(dp[i], maxDp[i - 1]);
    minDp[i] = Math.min(dp[i], minDp[i - 1]);
}

console.log(maxDp[N] - minDp[N])
