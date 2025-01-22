const input = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n');

const [N, M, H] = input[0].split(' ').map(Number);


const dp = Array.from(Array(N + 1), () => Array(H + 1).fill(0));
const mod = 10_007;

for (let i = 1; i <= N; i++) {
   const blocks = input[i].split(' ').map(Number);

   dp[i] = [...dp[i - 1]]

   for (const height of blocks) {
      dp[i][height]++;

      for (let j = height; j <= H; j++) {
         dp[i][j] += dp[i - 1][j - height];
         dp[i][j] %= mod;
      }
   }
}

console.log(dp[N][H] % mod);