const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const [S, T, D] = input
const time = D / (2 * S)
const F = T * time
console.log(F)