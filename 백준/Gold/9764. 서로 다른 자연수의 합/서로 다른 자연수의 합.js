const [N, ...testCases] = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);


const max = Math.max(...testCases);
const dp = Array.from(Array(max + 1), () => Array(max + 1).fill(0));

dp[0][0] = 1;

for (let i = 0; i <= max; i++) {
  for (let j = 1; j <= max; j++) {
    dp[i][j] = dp[i][j - 1];

    if (j > i) {
      continue;
    }

    dp[i][j] = (dp[i][j] + dp[i - j][j - 1]) % 100999
  }
}

console.log(testCases.map(elem => dp[elem][elem] % 100999).join('\n'))