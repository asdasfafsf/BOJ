const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let [A,B] = input[0].split(' ').map(Number)

let M = (B - A) / 400
let result = 1 / (1 + 10 ** M)

console.log(result)