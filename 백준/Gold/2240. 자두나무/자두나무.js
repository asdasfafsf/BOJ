const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const [T, W] = input[0].split(' ').map(Number);
const trees = input.slice(1).map(Number);

const dp = [
    Array.from({length:T + 1}, () => Array.from({length: W + 1}, () => 0)),
    Array.from({length:T + 1}, () => Array.from({length: W + 1}, () => 0))
]

dp[0][1][0] = 0;


for (let t = 1; t <= T; t++) {
    dp[0][t][0] = dp[0][t - 1][0] + (trees[t - 1] === 1 ? 1 : 0);
}


for (let w = 1 ; w <= W; w++) {
    for (let t = 1; t <= T; t++) {
        if (w % 2 === 0) {
            dp[0][t][w] = Math.max(dp[1][t][w - 1], dp[0][t - 1][w]) + (trees[t - 1] === 1 ? 1 : 0)
        } else {
            dp[1][t][w] = Math.max(dp[0][t][w - 1], dp[1][t - 1][w]) + (trees[t - 1] === 1 ? 0 : 1)
        }
        
    }
}
// console.log(dp)
console.log(dp[W % 2][T][W]);
   