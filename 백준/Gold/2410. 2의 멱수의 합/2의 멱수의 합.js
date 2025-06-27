const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim();
    
const mod = 1_000_000_000;

const dp = Array(1_000_001).fill(0);
dp[0] = 1;

for (let p = 1; p <= 1_000_000; p <<= 1) {
  for (let i = p; i <= 1_000_000; i++) {
    dp[i] = (dp[i] + dp[i - p]) % mod;
  }
}

console.log(dp[+input]);