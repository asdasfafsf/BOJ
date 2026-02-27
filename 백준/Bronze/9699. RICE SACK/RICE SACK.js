const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let t = Number(input[0])
let idx = 1

for (let i = 1; i <= t; i++) {
    let arr = input[idx++].split(' ').map(Number)
    console.log(`Case #${i}: ${Math.max(...arr)}`)
}