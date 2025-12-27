const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = parseInt(input[0])
const [A, B] = input[1].split(' ').map(Number)

console.log(Math.min(N, Math.floor(A / 2) + B))