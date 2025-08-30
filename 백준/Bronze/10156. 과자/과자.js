const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const [K, N, M] = input
const total = K * N
const result = total > M ? total - M : 0

console.log(result)