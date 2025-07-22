const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const [T1, T2] = input[0].split(' ').map(Number)

console.log(Math.min(T1, T2))