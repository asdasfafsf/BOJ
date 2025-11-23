const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(/\s+/)
    .map(BigInt)

const a = input[0], b = input[1], c = input[2]
const arr = [a, b, c].sort((x, y) => (x < y ? -1 : 1))
console.log(arr[1].toString())