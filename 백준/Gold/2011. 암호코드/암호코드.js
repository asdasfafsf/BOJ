const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('')
    .map(Number);

if (input[0] === 0) {
    console.log(0);
    return;
}

if (input.length === 1) {
    console.log(1);
    return;
}

const dp = Array.from(Array(2), () => Array(input.length).fill(0));

dp[0][0] = 1;
dp[1][0] = 0;

dp[0][1] = input[1] !== 0 ? 1 : 0;

const code = input[0] * 10 + input[1];
dp[1][1] = code >= 10 && code <= 26 ? 1 : 0;

for (let i = 2; i < input.length; i++) {
    const p = input[i - 1];
    const c = input[i];

    const code = p * 10 + c;

    if (c > 0) {
        dp[0][i] = (dp[0][i - 1] + dp[1][i - 1]) % 1000000;
    }

    if (p > 0 && code >= 10 && code <= 26) {
        dp[1][i] = (dp[0][i - 2] + dp[1][i - 2]) % 1000000;
    }
}

console.log((dp[0].at(-1) + dp[1].at(-1)) % 1000000);