const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const [N, A, B, C, D] = input

const costX = Math.ceil(N / A) * B
const costY = Math.ceil(N / C) * D

console.log(Math.min(costX, costY))