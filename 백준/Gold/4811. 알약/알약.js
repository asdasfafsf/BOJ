const arr = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(0, -1)
    .map(Number);

const dp = Array.from({length: 31}, () => Array.from({length: 31}, () => 0));

for (let i = 0; i < dp.length; i++) {
    dp[0][i] = 1;
    dp[1][i] = i;
}


for (let i = 2; i < 31; i++) {
    for (let j = i; j < 31; j++) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 2][j] + dp[i][j - 1];
    }
}

const answer = arr.map(elem => dp[elem][elem]).join('\n');
console.log(answer);
