const [[N], ...list] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(line => line.split(' ').map(Number));

const cells = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    cells.push([y, x, list[y][x]]);
  }
}

const dp = new Array(cells.length).fill(1);
let ans = 1;
for (let i = 0; i < cells.length; i++) {
  for (let j = 0; j < i; j++) {
    if (cells[j][0] <= cells[i][0] && cells[j][1] <= cells[i][1] && cells[j][2] < cells[i][2]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  ans = Math.max(ans, dp[i]);
}
console.log(ans);
