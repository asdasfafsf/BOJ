const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ')
const A = Number(input[0])
const B = Number(input[1])

const x = Math.min(B, A - 1)
console.log(x + (x + 1))