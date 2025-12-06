const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number)
const [A, P, C] = input

const result = Math.max(A + C, A, P)
console.log(result)