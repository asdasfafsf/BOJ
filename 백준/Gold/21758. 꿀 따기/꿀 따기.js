
const [N, ...honey] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(/\s/)
    .map(Number);


const prefixSum = [0];

for (let i = 0; i < honey.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + honey[i];
}

let answer = (prefixSum.at(-2) - prefixSum[1]) + Math.max(honey[Math.ceil(N / 2)], honey[Math.floor(N / 2)])

const lrMax = prefixSum.at(-1) - prefixSum[1];
const rlMax = prefixSum.at(-1) - honey.at(-1);

for (let i = 1; i < N - 1; i++) {
    answer = Math.max(
        answer,
        lrMax - honey[i] 
        + prefixSum.at(-1) - prefixSum[i + 1],
        rlMax - honey[i]
        + prefixSum[i]
    )
}

console.log(answer)