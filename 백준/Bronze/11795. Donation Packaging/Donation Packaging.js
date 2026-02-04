const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

let idx = 0
const T = input[idx++]
let a = 0, b = 0, c = 0
let out = []

for (let i = 0; i < T; i++) {
    a += input[idx++]
    b += input[idx++]
    c += input[idx++]

    const m = Math.min(a, b, c)
    if (m < 30) {
        out.push('NO')
    } else {
        out.push(String(m))
        a -= m
        b -= m
        c -= m
    }
}

process.stdout.write(out.join('\n'))