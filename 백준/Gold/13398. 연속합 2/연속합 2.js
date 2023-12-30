
const [n, [...arr]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const dp = [arr[0]];
const rdp = [arr[0]];
let answer = arr[0];


for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
    rdp[i] = Math.max(rdp[i - 1] + arr[i], dp[i - 1])
    answer = Math.max(answer, dp[i], rdp[i]);
}

console.log(answer);