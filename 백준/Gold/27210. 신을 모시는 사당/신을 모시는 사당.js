const [[N], stoneStatues] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const dp = Array(N + 1).fill(0);

let min = 0;
let max = 0;
for (let i = 1; i <= N; i++) {
    const elem = stoneStatues[i - 1];

    if (elem === 1) {
        dp[i] = dp[i - 1] + 1;
    } else {
        dp[i] = dp[i - 1] - 1;
    }

    max = Math.max(dp[i], max);
    min = Math.min(dp[i], min);
}

console.log(max - min);
