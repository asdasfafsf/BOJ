const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')

const A = input[0]
const B = input[1]
const C = input[2]

const num = Number(A) + Number(B) - Number(C)
const str = (A + B) - C

console.log(num)
console.log(str)