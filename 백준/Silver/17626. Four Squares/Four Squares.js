const fs = require('fs')


const input = +(fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim());

const dp = [0, 1, 2];
for (let i = dp.length - 1; i <= input; i++) {
    const root = Math.sqrt(i);

    if (root === parseInt(root)) {
        dp[i] = 1;
        continue;
    }

    dp[i] = 50000;
    for (let j = 1; j <= root; j++) {
        dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1)
    }
}

console.log(dp.at(input));