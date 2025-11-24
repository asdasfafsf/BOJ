const input = require('fs').readFileSync(0,'utf-8').trim().split('\n')
const N = +input[0]
const M = +input[1]
const K = +input[2]

const lines = M / N
console.log(lines * K)