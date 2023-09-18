const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n')
                    .map(elem => elem.trim().split(' ').map(Number));


const [N] = input[0];
const arr = input.slice(1);
const dp = Array.from({length: N + 1}).map(elem => 0);


for (let i = 0; i < N; i++) {
    const [T, P] = arr[i];

    for (let j = T + i; j <= N; j++) {
        if (dp[j] < dp[i] + P) {
            dp[j] = dp[i] + P;
        }
    }
}
console.log(dp.at(-1));