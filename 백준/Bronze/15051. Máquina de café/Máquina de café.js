const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)

const [A1, A2, A3] = input

let cost1 = Math.abs(1 - 1) * 2 * A1 + Math.abs(2 - 1) * 2 * A2 + Math.abs(3 - 1) * 2 * A3
let cost2 = Math.abs(1 - 2) * 2 * A1 + Math.abs(2 - 2) * 2 * A2 + Math.abs(3 - 2) * 2 * A3
let cost3 = Math.abs(1 - 3) * 2 * A1 + Math.abs(2 - 3) * 2 * A2 + Math.abs(3 - 3) * 2 * A3

let ans = Math.min(cost1, cost2, cost3)

console.log(ans)