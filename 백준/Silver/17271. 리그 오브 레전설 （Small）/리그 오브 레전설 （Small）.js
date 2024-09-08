const [N, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number);


const dp = Array(10001).fill(0);

dp[1] = 1;
dp[M] = 2;

for (let i = 2; i <= N; i++) {
    if (i === M) {
        continue;
    }

    dp[i] = (dp[i - 1] + (i - M < 0 ? 0 : dp[i - M])) % 1_000_000_007;
}


console.log(dp[N])