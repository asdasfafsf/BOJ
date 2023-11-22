const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const arr = input[1].split(' ').map(Number);
const dp = arr.map(elem => 0);

dp[0] = arr[0];
dp[1] = Math.min(dp[0] * 2, arr[1])


for (let i = 2; i < arr.length; i++) {
    dp[i] = arr[i];

    for (let j = i; j > 0; j--) {
        dp[i] = Math.min(dp[j - 1] + dp[i - j], dp[i]);
    }
}

console.log(dp.at(-1));