
const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()


const X = +input;
const dp = [0, 0];


const answer = [X];
for (let i = 1; i <= X; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 6 === 0) {
        dp[i] = Math.min(dp[i / 2] + 1, dp[i / 3] + 1, dp[i])
    } else if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1)
    } else if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1)
    } 

}

let current = X;

while (current > 1) {
   if (current % 3 === 0 && dp[current / 3] == dp[current] - 1) {
        current = current / 3;
    } else if (current % 2 === 0 && dp[current / 2] == dp[current] - 1) {
        current = current / 2;
    } else {
        current--;
    }

    answer.push(current);
}
console.log(dp.at(X) - 1)
console.log(answer.join(' '))