const fs = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(/\s+/)
    .map(Number)

const N = fs[0]
const K = fs[1]
const arr = fs.slice(2)

let sum = 0
for (let i = 0; i < K; i++) sum += arr[i]

let max = sum

for (let i = K; i < N; i++) {
    sum += arr[i]
    sum -= arr[i - K]
    if (sum > max) max = sum
}

console.log(max)