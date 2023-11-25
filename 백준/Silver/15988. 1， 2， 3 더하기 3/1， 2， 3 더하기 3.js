const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    .map(Number)
    .slice(1);


const max = Math.max(...input);
const dp = [0, 1, 2, 4];


for (let i = dp.length; i <= max; i++) {
    dp[i] = ((dp[i - 1] + dp[i - 2]) % 1000000009 + dp[i - 3]) % 1000000009;
}

const answer = input.map(elem => dp[elem]).join('\n');
console.log(answer);

