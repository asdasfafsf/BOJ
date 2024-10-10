const [N, L] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)


const counts = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    counts[i] = Math.floor(N / i);
    counts[i] %= 1_000_000_007;
}

const dp = Array.from(Array(N + 1), () => Array(L + 1).fill(0));

for (let i = 1; i <= N; i++) {
    dp[i][1] = 1;
    dp[i][2] = counts[i];
}


for (let 길이 = 3; 길이 <= L; 길이++) {
    for (let 현재숫자 = 1; 현재숫자 <= N; 현재숫자++) {
        for (let 배수 = 현재숫자; 배수 <= N; 배수+=현재숫자) {
            dp[현재숫자][길이] += dp[배수][길이 - 1]
            dp[현재숫자][길이] %= 1_000_000_007;
        }
    }
}
let answer = 0;
for (let i = 0; i <= N; i++) {
    answer += dp[i][L];
    answer %= 1_000_000_007;
}

console.log(answer)