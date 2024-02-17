const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const N = +input;
const dp = Array.from({ length: N + 1 }, () => Array.from({ length: 10 }, () => Array.from({ length: 1024 }, () => 0)));

for (let i = 1; i < 10; i++) {
    dp[0][i][1 << i] = 1;
}

for (let i = 1; i < N; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 1024; k++) {
            if (j > 0) {
                dp[i][j][k | (1 << j)] += (dp[i - 1][j - 1][k] % 1_000_000_000);
            }
            if (j < 9) {
                dp[i][j][k | (1 << j)] += (dp[i - 1][j + 1][k] % 1_000_000_000);
            }

        }
    }
}

let answer = 0;

for (let i = 0; i < 10; i++) {
    answer += (dp[N - 1][i][1023] % 1_000_000_000);
    answer %= 1_000_000_000
}

console.log(answer)