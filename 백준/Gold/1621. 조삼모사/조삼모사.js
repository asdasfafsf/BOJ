const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');



const N = +input[0];
const [K, C] = input[1].split(' ').map(Number);

const values = input[2].split(' ').map(Number);

const dp = Array(1000002).fill(0);
for (let i = 0; i < K - 1; i++) {
    dp[i + 1] = dp[i] + values[i];
}

const points = Array(1000002).fill(false);

let last = 0;
for (let i = K; i <= N; i++) {
    if (dp[i - K] + C < dp[i - 1] + values[i - 1]) {
        points[i - K + 1] = true;
        last = i - K + 1;
    }

    dp[i] = Math.min(
        dp[i - K] + C,
        dp[i - 1] + values[i - 1]
    )
}
const answer = [];
while (last > 0) {
    if (points[last] === true) {
        answer.push(last);
        last -= K;
    } else {
        last--;
    }
}

console.log((dp[N] + '\n' + answer.length + '\n' + answer.reverse().join('\n')).trim());