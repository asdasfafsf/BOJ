const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n')

let idx = 0
const T = Number(input[idx++])
let out = []

for (let t = 0; t < T; t++) {
    const a = input[idx++].trim()
    const b = input[idx++].trim()
    let cnt = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) cnt++
    }
    out.push(`Hamming distance is ${cnt}.`)
}

console.log(out.join('\n'))