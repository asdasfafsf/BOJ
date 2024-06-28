const [N, ...testCases] = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);


const max = Math.max(...testCases);
const dp = Array.from(Array(max + 1), () => Array(max + 1).fill(0));

for (let i = 1 ; i <= max; i++) {
  dp[i][i] = 1;
}



for (let i = 2; i <= max; i++) {
  for (let j = 1; j < i; j++) {
    dp[i][j] = 0;
    for (let k = j + 1; k<= i; k++) {
      dp[i][j] += dp[i - j][k];
      dp[i][j] %= 100999;
    }
  }
}

const dp2 = dp.map(elem => elem.reduce((pv, cv) => (pv + cv) % 100999, 0));


testCases.forEach(elem => console.log(dp2[elem] % 100999));