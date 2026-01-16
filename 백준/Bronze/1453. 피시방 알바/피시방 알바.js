const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(/\s+/)

const N = Number(input[0])
const arr = input.slice(1)

const used = new Set()
let reject = 0

for (let i = 0; i < N; i++) {
    if (used.has(arr[i])) reject++
    else used.add(arr[i])
}

console.log(reject)