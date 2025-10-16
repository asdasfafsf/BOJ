const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()

let x = input
const seen = new Set()

while (!seen.has(x)) {
    seen.add(x)
    const first = Number(x[0])
    const len = x.length
    x = String(first * len)
    if (seen.has(x)) {
        console.log('FA')
        process.exit()
    }
}

console.log('NFA')