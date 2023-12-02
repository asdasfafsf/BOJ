const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [dx, dy] = input[0].split(' ').map(elem => elem - 1);
const [tx, ty] = input[1].split(' ').map(elem => elem - 1);


const dp = Array.from({length: dy + 1}, () => Array.from({length: dx + 1}, () => 1n));

for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]);
    }
}

const startToToast = dp[ty][tx] % 1000007n;
const toastToSchool = dp[dy - ty][dx - tx] % 1000007n;
console.log(((startToToast * toastToSchool) % 1000007n).toString());

