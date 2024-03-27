
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const [R, C, Q] = input[0].split(' ').map(Number);
const picture = [];

for (let i = 1; i < R + 1; i++) {
    picture.push(input[i].split(' ').map(Number));
}

const prefixSum = Array.from(Array(R + 1), () => Array(C + 1).fill(0));

for (let y = 1; y <= R; y++) {
    for (let x = 1; x <= C; x++) {
        prefixSum[y][x] = picture[y - 1][x - 1] + prefixSum[y - 1][x] + prefixSum[y][x - 1] - prefixSum[y - 1][x - 1]
    }
}

const answer = [];

for (let i = R + 1; i < input.length; i++) {
    const [sy, sx, ey, ex] = input[i].split(' ').map(Number);

    const dist = Math.max(1, Math.abs(ey - sy + 1)) * Math.max(1, Math.abs(ex - sx + 1));
    const sum = prefixSum[ey][ex] - (prefixSum[ey][sx - 1] + prefixSum[sy - 1][ex] - prefixSum[sy - 1][sx - 1]);

    answer.push(Math.floor(sum / dist))
}

console.log(answer.join('\n'))