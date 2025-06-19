const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

let index = 0;
const [n] = input[index++];
const matrix = [];
const rdp = [];
const dp = [];

for (let i = 0; i < n; i++) {
    dp.push([...input[index]]);
    rdp.push([...input[index]]);
    matrix.push(input[index++]);
}

for (let i = 1; i < n; i++) {
    dp[0][i] += dp[0][i - 1];
    dp[i][0] += dp[i - 1][0];

    rdp[n - 1][n - i - 1] += rdp[n - 1][n - i];
    rdp[n - i - 1][n - 1] += rdp[n - i][n - 1];
}


for (let y = 1; y < n; y++) {
    for (let x = 1; x < n; x++) {
        dp[y][x] = Math.max(dp[y - 1][x], dp[y][x - 1]) + dp[y][x];
        rdp[n - y - 1][n - x - 1] = Math.max(rdp[n - y - 1][n - x], rdp[n - y][n - x - 1]) + rdp[n - y - 1][n - x - 1];
    }
}

const [p] = input[index++];
let answer = -Infinity;

for (let i = 0; i < p; i++) {
    const [r, c] = input[index++].map(elem => elem - 1);

   answer = Math.max(answer, rdp[r][c] + dp[r][c] - matrix[r][c])
}
console.log(answer);