const [[N, M], ...pages] = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n')
   .map(elem => elem.split(' ').map(Number));


const dp = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

for (let i = 0; i < pages.length; i++) {
   const [day, page] = pages[i];

   for (let j = 1; j <= N; j++) {
      if (j < day) dp[j][i + 1] = dp[j][i];
      else dp[j][i + 1] = Math.max(dp[j - day][i] + page, dp[j][i]);
   }
}


console.log(dp[N][M])