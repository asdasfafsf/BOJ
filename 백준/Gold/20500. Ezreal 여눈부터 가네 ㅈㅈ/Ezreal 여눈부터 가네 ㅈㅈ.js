const N = +(require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim());


const dp = [0, 0, 1];

for (let i = dp.length; i <= N; i++) {
    dp[i] = (((dp[i - 2] * 2) % 1_000_000_007) + dp[i - 1]) % 1_000_000_007;
}

console.log(dp.at(N));