
const arr = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const max = Math.max(...arr);
const idx = arr.indexOf(max);
console.log(max);
console.log(idx + 1);

