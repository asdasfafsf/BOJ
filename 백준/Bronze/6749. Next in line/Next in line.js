const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const Y = Number(input[0])
const M = Number(input[1])

console.log(2 * M - Y)