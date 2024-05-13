const [[n], [...s]] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const dp = Array.from({ length: n }, () => new Array(n).fill(0));
let answer = 0;

for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
        if (s[i] <= s[j]) {
            if (i + 1 < n && j + 1 < n) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = 1;
            }
        }
        answer += dp[i][j];
    }
}

console.log(answer)