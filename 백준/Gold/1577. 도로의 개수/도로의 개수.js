const gongsaIng = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const [N, M] = gongsaIng.shift();
const [K] = gongsaIng.shift();

const dp = Array.from(Array(N + 1), () => Array(M + 1).fill(0n));
const canVisit = Array.from(Array(N + 1), () => Array.from(Array(M + 1), () => [true, true]));

for (const [sy, sx, ey, ex] of gongsaIng) {
    if (sy < ey || sx < ex) {
        if (sy < ey) {
            canVisit[sy][sx][0] = false; 
        } else {
            canVisit[sy][sx][1] = false; 
        }
    } else {
        if (ey < sy) {
            canVisit[ey][ex][0] = false; 
        } else {
            canVisit[ey][ex][1] = false; 
        }
    }
}

dp[0][0] = 1n;

for (let x = 1; x <= M; x++) {
    const y = 0;
    if (canVisit[y][x - 1][1]) {
        dp[y][x] = dp[y][x - 1];
    } else {
        break;
    }
}

for (let y = 1; y <= N; y++) {
    const x = 0;
    if (canVisit[y - 1][x][0]) {
        dp[y][x] = dp[y - 1][x];
    } else {
        break;
    }
}

for (let y = 1; y <= N; y++) {
    for (let x = 1; x <= M; x++) {
        if (canVisit[y - 1][x][0]) {
            dp[y][x] += dp[y - 1][x];
        }
        if (canVisit[y][x - 1][1]) {
            dp[y][x] += dp[y][x - 1];
        }
    }
}

console.log(dp[N][M].toString());