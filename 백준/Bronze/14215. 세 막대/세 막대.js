const [A, B, C] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);



const sum = A + B + C;

const max = Math.max(A, B, C);
const min = Math.min(A, B, C);
const mid = sum - max - min;

console.log(min + mid + Math.min(min + mid - 1, max))