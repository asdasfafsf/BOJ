const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

const [A, B, C] = input

const result = Math.max(Math.floor(A * B / C), Math.floor(A / B * C))
console.log(result)