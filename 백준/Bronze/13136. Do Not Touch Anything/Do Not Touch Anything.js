const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)

const R = Number(input[0])
const C = Number(input[1])
const N = Number(input[2])

const rows = Math.ceil(R / N)
const cols = Math.ceil(C / N)

console.log(rows * cols)