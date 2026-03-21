const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').trim()

const N = Number(input)

let max = 0
let ans = 2

for (let b = 2; b <= N; b++) {
    let x = N
    let sum = 0

    while (x > 0) {
        sum += x % b
        x = Math.floor(x / b)
    }

    if (sum > max) {
        max = sum
        ans = b
    }
}

console.log(max + ' ' + ans)