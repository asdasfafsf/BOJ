const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let n = input[0]
let arr = Array(10).fill(0)

for (let i = 0; i < n.length; i++) {
    arr[n[i]]++
}

let sixnine = arr[6] + arr[9]
arr[6] = Math.ceil(sixnine / 2)
arr[9] = 0

let max = 0
for (let i = 0; i < 10; i++) {
    if (arr[i] > max) max = arr[i]
}

console.log(max)