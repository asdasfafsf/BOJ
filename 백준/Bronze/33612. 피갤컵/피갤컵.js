const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = Number(input[0])

let year = 2024
let month = 8 + (N - 1) * 7

year += Math.floor((month - 1) / 12)
month = ((month - 1) % 12) + 1

console.log(`${year} ${month}`)