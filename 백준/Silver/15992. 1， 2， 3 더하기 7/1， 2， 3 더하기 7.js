const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

const dp = Array.from({length: 1001}, () => new Array(1001).fill(0));
dp[1][1] = 1;
dp[2][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 2;
dp[3][3] = 1;

for (let i = 4; i < dp.length; i++) {
    dp[i][i] = 1;
    dp[i][i - 1] = i;
    for (let j = 1; j < dp[i].length; j++) {
        dp[i][j] = ((dp[i - 1][j - 1] + dp[i - 2][j - 1]) % 1_000_000_009  + dp[i - 3][j - 1]) % 1_000_000_009;
    }
}

const answer = [];
for (let i = 1; i < input.length; i++) {
    const [y, x] = input[i].split(' ').map(Number);
    answer.push(dp[y][x])
}

console.log(answer.join('\n'))