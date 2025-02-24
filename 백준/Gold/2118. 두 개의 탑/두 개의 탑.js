const [N, ...dist] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)



const prefixSum = [0];

for (let i = 0; i < N; i++) {
    prefixSum.push(prefixSum.at(-1) + dist[i]);
}

let left = 0;
let right = N - 1;

let count = 0;
let answer = -1;
while (left < N) {
    const ld = left < right 
        ? prefixSum[right] - prefixSum[left]
        : prefixSum.at(-1) - (prefixSum[left] - prefixSum[right]);

    const rd = prefixSum.at(-1) - ld;


    if (ld > rd) {
        left++;
    } else {
        right++;
        right %= N;
    }
    answer = Math.max(Math.min(ld, rd), answer);
    count++;
}

console.log(answer);