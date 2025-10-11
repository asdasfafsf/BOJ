const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const [A, B, C, D] = input
const diff1 = Math.abs((A + D) - (B + C))
const diff2 = Math.abs((A + C) - (B + D))
const diff3 = Math.abs((A + B) - (C + D))

console.log(Math.min(diff1, diff2, diff3))