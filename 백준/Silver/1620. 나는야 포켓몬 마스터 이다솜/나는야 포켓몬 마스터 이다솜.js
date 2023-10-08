const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, N + 1);
const map = Object.fromEntries(arr.map((elem, index) => [elem, index + 1]));

console.log(input.slice(N + 1).map(elem => arr[elem - 1] ?? map[elem]).join('\n'))