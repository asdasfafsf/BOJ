const [[N], students] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const dp = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    const s1 = students[i - 1];

    let max = s1;
    let min = s1;

    for (let j = i + 1; j <= N; j++) {
        const s2 = students[j - 1];

        max = Math.max(max, s2)
        min = Math.min(min, s2);

        const score = max - min;
        dp[j] = Math.max(dp[i - 1] + score, dp[j])
    }
}

console.log(dp[N])