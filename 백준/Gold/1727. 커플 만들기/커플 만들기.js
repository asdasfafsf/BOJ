const [[n, m], boys, girls] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .toString()
    .split('\n')
    .map(elem => elem.split(' ').map(Number))



boys.sort((a, b) => a - b);
girls.sort((a, b) => a - b);

const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        if (i === j) {
            dp[i][j] = dp[i - 1][j - 1] + Math.abs(boys[i - 1] - girls[j - 1]);
        } else if (i > j) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1] + Math.abs(boys[i - 1] - girls[j - 1]))
        } else if (j > i) {
            dp[i][j] = Math.min(dp[i][j - 1] ,dp[i - 1][j - 1] + Math.abs(boys[i - 1] - girls[j - 1]));
        }
    }
}

console.log(dp[n][m]);