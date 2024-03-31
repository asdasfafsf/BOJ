const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
const N = Number(input);


const dp = [];

for (let i = 0; i < 101; i++) {
    dp[i] = i;

    for (let j = 1; j <= i - 3; j++) {
        dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
    }
}
console.log(dp[N])