
const [[N], ...colors] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



let answer = Number.MAX_SAFE_INTEGER;
const dp = Array.from({length: N}, () => Array.from({length: 3}, () => 1001));

for (let t = 0; t < 3; t++) {
    dp[0] = colors[0].map((elem, index) => {
        if (index === t % 3) {
            return elem;
        }
        return Infinity;
    })

    for (let i = 1; i < N; i++) {
        dp[i][(t + 0) % 3] = Math.min(dp[i - 1][(t + 1) % 3], dp[i - 1][(t + 2) % 3]) + colors[i][(t + 0) % 3];
        dp[i][(t + 1) % 3] = Math.min(dp[i - 1][(t + 0) % 3], dp[i - 1][(t + 2) % 3]) + colors[i][(t + 1) % 3];
        dp[i][(t + 2) % 3] = Math.min(dp[i - 1][(t + 0) % 3], dp[i - 1][(t + 1) % 3]) + colors[i][(t + 2) % 3];
    }
    answer = Math.min(answer, dp[N - 1][(t + 1) % 3], dp[N - 1][(t + 2) % 3])
}

console.log(answer);