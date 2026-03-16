const [X, Y] = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(/\s+/)
    .map(Number)

const a = '1'.repeat(X)
const b = '1'.repeat(Y)

console.log((BigInt(a) + BigInt(b)).toString())