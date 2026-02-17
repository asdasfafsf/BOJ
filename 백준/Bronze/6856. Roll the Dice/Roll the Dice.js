const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const m = Number(input[0])
const n = Number(input[1])

let count = 0

for (let i = 1; i <= m; i++) {
    if (10 - i >= 1 && 10 - i <= n) count++
}

if (count === 1) {
    console.log(`There is 1 way to get the sum 10.`)
} else {
    console.log(`There are ${count} ways to get the sum 10.`)
}