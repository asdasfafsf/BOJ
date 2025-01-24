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

   for (let k = 0; k <= K - energy; k++) {
      for (let d = 0; d < 4; d++) {
         if (dp[d][k] !== Infinity) {
            dp[(d + direction) % 4][k + energy] = Math.min(
               dp[d][k] + 1, 
               dp[(d + direction) % 4][k + energy]
            );
         }
      }
   }
}

console.log(dp[0][K] === Infinity ? -1 : dp[0][K])

