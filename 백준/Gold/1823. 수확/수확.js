const [N, ...v] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const dp = Array.from(Array(N + 2), () => Array(N + 2).fill(0));

for (let len = 1; len <= N; len++) {
    for (let left = 1; left <= N - len + 1; left++) {
        const right = left + len - 1;
        const order = N - (right - left);

        const leftOption = v[left - 1] * order + dp[left + 1][right];
        const rightOption = v[right - 1] * order + dp[left][right - 1];

        dp[left][right] = Math.max(leftOption, rightOption);
    }
}

console.log(dp[1][N]);