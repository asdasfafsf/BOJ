const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');


const getSumRow = (arr) => {
  const dp = Array(arr).fill(0);

  dp[0] = arr[0];
  dp[1] = Math.max(arr[1], dp[0]);

  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
  }

  return dp[arr.length - 1]
}
for (let i = 0; i < input.length;) {
  const [M, N] = input[i].split(' ').map(Number);
  if (!M) {
    break;
  }

  const dp = [];
  for (let j = 0; j < M; j++) {
    dp.push(getSumRow(input[++i].split(' ').map(Number)));
  }


  i++;
  console.log(getSumRow(dp));
}

