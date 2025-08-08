const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const [L, P] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
const real = L * P
const result = arr.map(v => v - real)
console.log(result.join(' '))