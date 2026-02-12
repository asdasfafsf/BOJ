const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const d1 = Number(input[0])
const d2 = Number(input[1])

const pi = 3.141592
const result = 2 * d1 + 2 * pi * d2

console.log(result.toFixed(6))