const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const N = +input;
const dp = Array.from(Array(100001), () => Array(10).fill(1));


for (let i = 2; i < dp.length; i++) {
    dp[i][1] = (((dp[i - 1][2] + dp[i - 1][3]) % 987_654_321) + dp[i - 1][1]) % 987_654_321;
    dp[i][2] = (((((dp[i - 1][1] + dp[i - 1][3]) % 987_654_321) + dp[i - 1][4]) % 987_654_321) + dp[i - 1][2]) % 987_654_321;
    
    for (let j = 3; j < 8; j++) {
        dp[i][j] = ((((dp[i - 1][j - 1] + dp[i - 1][j - 2]) % 987_654_321 + (dp[i - 1][j + 1] + dp[i - 1][j + 2]) % 987_654_321) % 987_654_321) + dp[i - 1][j]) % 987_654_321;
    }

    dp[i][8] = ((((dp[i - 1][7] + dp[i - 1][6]) % 987_654_321 + dp[i - 1][9]) % 987_654_321) + dp[i - 1][8]) % 987_654_321;
    dp[i][9] = (((dp[i - 1][7] + dp[i - 1][8]) % 987_654_321) + dp[i - 1][9]) % 987_654_321

}

console.log(dp[N].reduce((pv, cv) => (pv + cv) % 987_654_321, -1));



