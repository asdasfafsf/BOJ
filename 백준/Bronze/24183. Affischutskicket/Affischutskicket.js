const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

const [env, poster, info] = input

const C4 = (229 * 324) / 1_000_000
const A3 = (297 * 420) / 1_000_000
const A4 = (210 * 297) / 1_000_000

const weight = 2 * C4 * env + 2 * A3 * poster + A4 * info

console.log(weight.toFixed(6))