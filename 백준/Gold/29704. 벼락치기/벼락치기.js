const [[N, T], ...problems] = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n')
   .map(elem => elem.split(' ').map(Number));

const dp = Array.from(Array(N + 1), () => Array(T + 1).fill(0));

for (let i = 1; i <= N; i++) {
    const [d, m] = problems[i - 1];

    for (let j = T; j >= 0; j--) {
        if (j + d <= T) {
            dp[i][j + d] = Math.max(dp[i][j + d], dp[i - 1][j] + m);
        }
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
    }
}

const sum = problems.reduce((pv, cv) => pv + cv[1], 0);

console.log(sum - dp[N][T]);