const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, H] = input.shift().split(' ').map(Number);
const list = input.map(Number);

const prefixSum = new Array(H + 1).fill(0);

for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
        prefixSum[0]++;
        prefixSum[list[i]]--;
    } else {
        prefixSum[H - list[i]]++;
    }
}

let min = N;
let count = 0;
let total = 0;

for (let i = 0; i < H; i++) {
    total += prefixSum[i];

    if (total < min) {
        min = total;
        count = 1;
    } else if (total === min) {
        count++;
    }
}

console.log(min, count);