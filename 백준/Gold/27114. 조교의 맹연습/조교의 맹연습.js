const [A, B, C, K] = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split(' ')
   .map(Number);


const actions = [[3, A], [1, B], [2, C]];
const dp = Array.from(Array(4), () => Array(K + 1).fill(Infinity));

dp[0][0] = 0;

for (const [direction, energy] of actions) {

   for (let k = energy; k <= K; k++) {
      for (let d = 0; d < 4; d++) {
         if (dp[d][k - energy] !== Infinity) {
            dp[(d + direction) % 4][k] = Math.min(
               dp[d][k - energy] + 1, 
               dp[(d + direction) % 4][k]
            );
         }
      }
   }
}

console.log(dp[0][K] === Infinity ? -1 : dp[0][K])

