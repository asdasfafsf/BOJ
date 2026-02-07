const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let n = Number(input[0])
let idx = 1
let out = []

for (let t = 0; t < n; t++) {
    let parts = input[idx++].trim().split(' ')
    let str = parts[0]
    let i = Number(parts[1])
    let j = Number(parts[2])

    out.push(str.slice(0, i) + str.slice(j))
}

console.log(out.join('\n'))