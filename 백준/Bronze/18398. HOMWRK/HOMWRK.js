const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

let idx = 0
let T = input[idx++]
let output = []

for (let t = 0; t < T; t++) {
    let N = input[idx++]
    for (let i = 0; i < N; i++) {
        let A = input[idx++]
        let B = input[idx++]
        output.push((A + B) + ' ' + (A * B))
    }
}

console.log(output.join('\n'))