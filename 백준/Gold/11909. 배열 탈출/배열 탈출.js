const [[N], ...arr] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const dp = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));
dp[0][0] = 0;

for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {

        if (y > 0 && x > 0) {
            dp[y][x] = Math.min(
                Math.max(arr[y][x] - arr[y - 1][x] + 1, 0) + dp[y - 1][x],
                Math.max(arr[y][x] - arr[y][x - 1] + 1, 0) + dp[y][x - 1],
            )
        } else if (y > 0) {
            dp[y][x] = Math.max(arr[y][x] - arr[y - 1][x] + 1, 0) + dp[y - 1][x];
        } else if (x > 0) {
            dp[y][x] = Math.max(arr[y][x] - arr[y][x - 1] + 1, 0) + dp[y][x - 1];
        }

    }
}

console.log(dp[N - 1][N - 1])