const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

let N = input[0]
let arr = input.slice(1)

let ans = -1

for (let t = 0; t <= N; t++) {
    let count = 0
    for (let i = 0; i < N; i++) {
        if (arr[i] === t) count++
    }
    if (count === t) ans = Math.max(ans, t)
}

console.log(ans)