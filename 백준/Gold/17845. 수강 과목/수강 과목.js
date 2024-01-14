
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const [N, K] = input[0].split(' ').map(Number);
const arr = [[0, 0], ...input.slice(1).map(elem => elem.split(' ').map(Number))];

const dp = Array.from({length: K + 1}, () => Array.from({length: N + 1}, () => 0))


for (let i = 1; i <= K; i++) {
    const [I, T] = arr[i];

    for (let j = 1; j <= N; j++) {
        if (T > j) {
            dp[i][j] = dp[i - 1][j];
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - T] + I)

        }

    }
}

console.log(dp[K][N]);