const [[N], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const dp = Array.from(Array(N), () => Array(N).fill(0n));
dp[0][0] = 1n;

const canVisit = (y, x) => y >= 0 && y < N && x >= 0 && x < N
for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
        if (dp[y][x] === 0 || arr[y][x] === 0) {
            continue;
        }

        const [ny1, nx1] = [y + arr[y][x], x];
        const [ny2, nx2] = [y, x + arr[y][x]];

        if (canVisit(ny1, nx1)) {
            dp[ny1][nx1]+= dp[y][x];
        }

        if (canVisit(ny2, nx2)) {
            dp[ny2][nx2]+= dp[y][x];
        }
    }
}

console.log(dp[N - 1][N - 1].toString());