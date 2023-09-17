const fs = require('fs')
// const input = +fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n')
                    .map(elem => elem.trim().split(' ').map(Number));



const [MAX_COUNT, MAX_WEIGHT] = input[0];
const arr = input.slice(1)

const dp = Array.from({length: MAX_COUNT + 1}).map(elem => Array.from({length: MAX_WEIGHT + 1}).map(elem => 0));


for (let i = 1; i <= MAX_COUNT; i++) {
    const [w, v] = arr[i - 1];
    for (let j = 1; j <= MAX_WEIGHT; j++) {
        if (w > j) {
            dp[i][j] = dp[i - 1][j];
        }else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v)
        }

    }
}

console.log(dp[MAX_COUNT][MAX_WEIGHT]);