const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

let index = 0;
const [N, M, Q] = input[index++];

const A = [];
for (let y = 0; y < N; y++) {
    A.push(input[index++]);
}

const prefixSum = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

for (let x = 1; x <= M; x++) {
    let sum = 0;
    for (let y = 1; y <= N; y++) {
        sum += A[y - 1][x - 1];
        prefixSum[y][x] = prefixSum[y - 1][x - 1] + sum;
    }
}

const answer = [];

for (let i = 0; i < Q; i++) {
    const [W, P] = input[index++];
    answer.push(prefixSum[W][P]);
}

console.log(answer.join('\n'));