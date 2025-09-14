const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

const k = input[0]
const w = input[1]
const m = input[2]

const diff = w - k
const hits = diff <= 0 ? 0 : Math.ceil(diff / m)

console.log(hits)