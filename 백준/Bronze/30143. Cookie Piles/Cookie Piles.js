const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').trim().split('\n')
let t = Number(input[0])
let idx = 1
let out = []
while (t--) {
    let [N, A, D] = input[idx++].split(' ').map(Number)
    let total = (2 * A + (N - 1) * D) * N / 2
    out.push(total.toString())
}
console.log(out.join('\n'))