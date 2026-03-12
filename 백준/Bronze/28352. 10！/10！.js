const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let N = Number(input[0])
let f = 1n

for (let i = 1n; i <= BigInt(N); i++) f *= i

let week = 7n * 24n * 60n * 60n

console.log((f / week).toString())