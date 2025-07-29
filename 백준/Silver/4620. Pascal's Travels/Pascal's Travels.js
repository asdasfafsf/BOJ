const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

let index = 0;
while(index < input.length) {
    const n = +input[index++];
    if (n === -1) {
        break;
    }
    const map = [];

    for (let i = 0; i < n; i++) {
        map.push(input[index++].split('').map(Number));
    }

    const dp = Array.from(Array(n), () => Array(n).fill(0n));
    dp[0][0] = 1n;
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            const d = map[y][x];

            if (d === 0) {
                continue;
            }

            if (y + d < n) {
                dp[y + d][x] += dp[y][x];
            }

            if (x + d < n) {
                dp[y][x + d] += dp[y][x];
            }
        }
    }

    console.log(dp[n - 1][n - 1].toString());
}