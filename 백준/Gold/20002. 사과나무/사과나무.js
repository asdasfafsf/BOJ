
const [[N], ...profits] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
	.toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const prefixSum = Array.from(Array(N + 1), () => Array(N + 1).fill(0));



for (let y = 1; y <= N; y++) {
    for (let x = 1; x <= N; x++) {
        prefixSum[y][x] = profits[y - 1][x - 1] + prefixSum[y - 1][x] + prefixSum[y][x - 1] - prefixSum[y - 1][x - 1]
    }
}



let answer = -Number.MAX_SAFE_INTEGER

for (let y = 1; y <= N; y++) {
    for (let x = 1; x <= N; x++) {
        const dist = Math.min(N - y, N - x);


        for (let d = 0; d <= dist; d++) {
            const sy = y;
            const sx = x;

            const ey = sy + d;
            const ex = sx + d;

            const sum = prefixSum[ey][ex] - (prefixSum[ey][sx - 1] + prefixSum[sy - 1][ex] - prefixSum[sy - 1][sx - 1]);
            answer = Math.max(answer, sum)
        }
    }
}

console.log(answer)