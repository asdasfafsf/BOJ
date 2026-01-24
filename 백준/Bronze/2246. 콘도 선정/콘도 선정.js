const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

let idx = 0
const N = input[idx++]

const arr = new Array(N)
for (let i = 0; i < N; i++) {
    const D = input[idx++]
    const C = input[idx++]
    arr[i] = [D, C]
}

arr.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]))

let ans = 0
let minC = Infinity
let i = 0

while (i < N) {
    const d = arr[i][0]
    let groupMinC = arr[i][1]
    i++
    while (i < N && arr[i][0] === d) {
        if (arr[i][1] < groupMinC) groupMinC = arr[i][1]
        i++
    }
    if (groupMinC < minC) {
        ans++
        minC = groupMinC
    }
}

process.stdout.write(String(ans))