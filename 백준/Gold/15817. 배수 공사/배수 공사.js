const input = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n');

const [N, x] = input[0].split(' ').map(Number);

const dp = Array.from(Array(N + 1), () => Array(x + 1).fill(0));

const pipes = [];
for (let i = 1; i <= N; i++) {
   const [L, C] = input[i].split(' ').map(Number);

   for (let j = 0; j <= x; j++) {
      dp[i][j] = dp[i - 1][j];
   }

   for (let l = 1; l <= C; l++) {
      const w = l * L;

      if (w > x) {
         break;
      }
      dp[i][w]++;
      for (let j = w; j <= x; j++) {
         dp[i][j] += dp[i - 1][j - w];
      }
   }
   // console.log(dp[i].join(' '))

   // break;
}

// console.log(dp);

console.log(dp[N][x]);