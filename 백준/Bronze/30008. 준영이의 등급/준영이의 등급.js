const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

let idx = 0
let N = input[idx++]
let K = input[idx++]

let res = []

for (let i = 0; i < K; i++) {
    let G = input[idx++]
    let P = Math.floor(G * 100 / N)

    if (P <= 4) res.push(1)
    else if (P <= 11) res.push(2)
    else if (P <= 23) res.push(3)
    else if (P <= 40) res.push(4)
    else if (P <= 60) res.push(5)
    else if (P <= 77) res.push(6)
    else if (P <= 89) res.push(7)
    else if (P <= 96) res.push(8)
    else res.push(9)
}

console.log(res.join(' '))