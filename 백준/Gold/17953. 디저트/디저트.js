const [[N, M], ...desserts] = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n')
   .map(elem => elem.split(' ').map(Number));



// console.log(desserts)


const dp = Array.from(Array(N), () => Array(M).fill(0));

for (let i = 0; i < M; i++) {
   dp[0][i] = desserts[i][0];
}


for (let i = 1; i < N; i++) {
   for (let j = 0; j < M; j++) {

      dp[i][j] = dp[i - 1][j] + Math.floor(desserts[j][i] / 2);
      
      for (let k = j + 1; k < j + M; k++) {
         dp[i][j] = Math.max(dp[i][j], dp[i - 1][k % M] + desserts[j][i]);
      }
   }
}

console.log(Math.max(...dp[N - 1]));