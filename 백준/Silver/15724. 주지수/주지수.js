const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


let index = 0;
const [N, M] = input[index].split(' ').map(Number);
const arr = [];

for (let i = 0; i < N; i++) {
    arr.push(input[++index].split(' ').map(Number));
}

const prefixSum = Array.from({length: N + 1}, () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
        prefixSum[i][j] = arr[i - 1][j - 1] + prefixSum[i][j - 1] + prefixSum[i - 1][j] - prefixSum[i - 1][j - 1];
    }
}
const K = +[input[++index]];
const answer = [];

for (let i = 0; i < K; i++) {
    const [y1, x1, y2, x2] = input[++index].split(' ').map(Number);
    answer.push(
        (prefixSum[y2][x2] - (prefixSum[y2][x1 - 1] + prefixSum[y1 - 1][x2] - prefixSum[y1 - 1][x1 - 1]))
    )
}

console.log(answer.join('\n'))