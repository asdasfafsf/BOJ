const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const w = input.slice(0, 10).map(Number).sort((a, b) => b - a)
const k = input.slice(10, 20).map(Number).sort((a, b) => b - a)

const wSum = w[0] + w[1] + w[2]
const kSum = k[0] + k[1] + k[2]

console.log(wSum + ' ' + kSum)