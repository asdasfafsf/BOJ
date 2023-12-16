const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(BigInt);
const sum = +input[2];

let left = 0n;
let right = 0n;

for (const value of arr) {
    if (right < value) {
        right = value;
    }
}

while (left <= right) {
    const mid = (left + right) / 2n;
    const currentSum = arr.reduce((pv, cv) => pv + (cv > mid ? mid : cv), 0n);

    if (currentSum <= sum) {
        left = mid + 1n;
    } else {
        right = mid - 1n;
    }
}

console.log(right.toString())