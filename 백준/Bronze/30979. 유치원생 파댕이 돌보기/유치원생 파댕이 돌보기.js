const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')

const T = Number(input[0])
const N = Number(input[1])
const F = input[2].split(' ').map(Number)

const sum = F.reduce((a, b) => a + b, 0)

console.log(sum >= T ? 'Padaeng_i Happy' : 'Padaeng_i Cry')