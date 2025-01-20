const input = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n');



let T = +input[0];
let index = 0;
while (T--) {
   const N = +input[++index];
   const arr = input[++index].split(' ').map(Number);
   const M = +input[++index];

  
   const dp = Array(M + 1).fill(0);
   dp[0] = 1;
   for (let i = 1; i <= N; i++) {
      const value = arr[i - 1];

        for (let j = 1; j <= M; j++) {
            if (j - value >= 0) {
                dp[j] += dp[j - value];
            }
        }
   }


   console.log(dp[M]);
}