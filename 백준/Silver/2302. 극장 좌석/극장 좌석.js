const [N, M, ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);


const dp = Array.from({length: N}, () => 0);

dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;


for (let i = 4; i < 42; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}

let current = 1;
let answer = 1;

for (const elem of arr) {
    answer *= dp[(elem - current)];
    current = elem + 1;
}
answer *= dp[(N - current + 1)];

console.log(answer)