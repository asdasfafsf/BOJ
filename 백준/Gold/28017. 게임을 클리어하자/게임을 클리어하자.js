const [[N, M], ...times] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const dp = Array.from(Array(N), () => Array(M).fill(Infinity));
dp[0] = times[0];

for (let i = 1; i < N; i++) {
    for (let j = 0; j < M; j++) {
        for (let k = 0; k < M; k++) {
            if (k === j) {
                continue;
            }
            dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + times[i][j]);
        }
    }
}

console.log(Math.min(...dp[N - 1]));