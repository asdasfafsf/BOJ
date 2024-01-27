const [[N], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const dp = Array.from({length: N + 1}, () => 0);
let answer = 0;

for (let i = 0; i <= N; i++) {
    answer = Math.max(answer, dp[i]);
    if (i === N) {
        break;
    }

    const [T, P] = arr[i];
    dp[i + T] = Math.max(answer + P, dp[i + T]);
}

console.log(answer)