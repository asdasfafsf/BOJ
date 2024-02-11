const [start, end] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(BigInt);




const max = 55;
const min = 0;

const prefixSum = [1n];
const squared = [1n];

for (let i = prefixSum.length; i < 56; i++) {
    squared[i] = squared[i - 1] * 2n;
    prefixSum[i] = prefixSum[i - 1] * 2n + squared[i];
}


const cal = value => {
    let result = 0n;
    for (let i = 55; i >= 0; i--) {
        if (value & (squared[i])) {
            result += (prefixSum[i - 1] ?? 0n) + (value - (squared[i]) + 1n);
            value -= squared[i];
        }
    }

    return result;
}
console.log((cal(end) - cal(start - 1n)).toString());
