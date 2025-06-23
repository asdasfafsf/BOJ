const fs = require('fs')
const [_, a, b] = fs.readFileSync(0, 'utf-8').trim().split('\n')

console.log((BigInt(a) * BigInt(b)).toString())