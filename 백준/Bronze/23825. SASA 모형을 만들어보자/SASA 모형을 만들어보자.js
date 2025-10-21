const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ')
const N = Number(input[0])
const M = Number(input[1])
console.log(Math.min(Math.floor(N / 2), Math.floor(M / 2)))