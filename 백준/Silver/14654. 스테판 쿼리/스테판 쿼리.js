const fs = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n')

let N = +fs[0]
let A = fs[1].split(' ').map(Number)
let B = fs[2].split(' ').map(Number)

let max = 1
let count = 1
let winner

if (A[0] === B[0]) {
    winner = 1
} else if (
    (A[0] === 1 && B[0] === 3) ||
    (A[0] === 2 && B[0] === 1) ||
    (A[0] === 3 && B[0] === 2)
) {
    winner = 0
} else {
    winner = 1
}

for (let i = 1; i < N; i++) {
    let cur

    if (A[i] === B[i]) {
        cur = winner ^ 1
    } else if (
        (A[i] === 1 && B[i] === 3) ||
        (A[i] === 2 && B[i] === 1) ||
        (A[i] === 3 && B[i] === 2)
    ) {
        cur = 0
    } else {
        cur = 1
    }

    if (cur === winner) {
        count++
    } else {
        count = 1
        winner = cur
    }

    if (count > max) max = count
}

console.log(max)