const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const [p1, q1, p2, q2] = input
const numerator = p1 * p2
const denominator = 2 * q1 * q2
console.log(numerator % denominator === 0 ? 1 : 0)