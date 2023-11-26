
const fs = require('fs')
const [T, ...input] = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    .map(Number);


const max = Math.max(...input);


const dp = [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 2],
]

for (let i = dp.length; i <= max; i++) {
    dp[i] = [];

    dp[i][1] = ((dp[i - 1][0] + dp[i - 2][0]) % 1_000_000_009 + dp[i - 3][0]) % 1_000_000_009;
    dp[i][0] = ((dp[i - 1][1] + dp[i - 2][1]) % 1_000_000_009 + dp[i - 3][1]) % 1_000_000_009;
}


const answer = [];

for (let i = 0; i < input.length; i++) {
    const [odd, even] = dp[input[i]];

    answer.push(`${odd} ${even}`)
}

console.log(answer.join('\n'))