const fs = require('fs')
// const input = +fs.readFileSync('/dev/stdin').toString();
const input = +(fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim());


const dp = [BigInt(0), BigInt(1), BigInt(1)];

for (let i = 3; i <= input; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}

console.log((dp[input]).toString().replace('n'));
