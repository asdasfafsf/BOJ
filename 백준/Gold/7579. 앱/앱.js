const [[N, M], ables, disables] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number))


const dp = Array.from({length: 10001}, () => 0);
const sum = disables.reduce((pv, cv) => pv + cv, 0);
let answer = 10001;

for (let i = 0; i <= N; i++) {
    const byte = ables[i];
    const disabled = disables[i];

    for (let j = sum; j >= disabled; j--) {
        dp[j] = Math.max(dp[j], dp[j - disabled] + byte);
    }
}

for (let i = dp.length - 1; i >= 0; i--) {
    if (dp[i] >= M) {
        answer = i;
    }
}

console.log(answer)