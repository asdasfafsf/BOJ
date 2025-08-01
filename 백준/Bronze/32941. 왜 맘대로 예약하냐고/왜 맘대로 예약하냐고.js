const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const [T, X] = input[0].split(' ').map(Number)
const N = +input[1]

let idx = 2
let result = 'YES'

for (let i = 0; i < N; i++) {
    const K = +input[idx]
    const available = input[idx + 1].split(' ').map(Number)
    idx += 2
    if (!available.includes(X)) {
        result = 'NO'
    }
}

console.log(result)