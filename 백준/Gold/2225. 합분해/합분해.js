const [N, K] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number);


const dp = Array.from(Array(K + 1), () => Array(N + 1).fill(0));
dp[0][0] = 1;

const mod = 1_000_000_000;

for (let k = 1; k <= K; k++) {
    for (let n = 0; n <= N; n++) {
        for (let s = 0; s <= n; s++) {
            dp[k][n] += dp[k - 1][n - s];
            dp[k][n] %= mod;
        }
    }
}

console.log(dp[K][N])