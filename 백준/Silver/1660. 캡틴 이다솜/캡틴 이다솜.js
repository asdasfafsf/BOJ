const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const N = +input;

const dp = [0, 1];
const dp2 = [0, 1];

for (let i = dp.length; i <= 120; i++) {
    dp[i] = i + dp[i - 1];
    dp2[i] = dp[i] + dp2[i - 1];
}

const dp3 = [0, 1];

for (let i = 1; i < 300001; i++) {
    dp3[i] = i;

    for (let j = 0; j < dp2.length; j++) {
        if (i < dp2[j]) {
            break;
        }

        dp3[i] = Math.min(dp3[i], dp3[i - dp2[j]] + 1);
    }
}

console.log(dp3[N])
