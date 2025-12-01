const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
let X = Number(input[0])
let N = Number(input[1])
let sum = 0

for (let i = 0; i < N; i++) {
    let [a, b] = input[2 + i].split(' ').map(Number)
    sum += a * b
}

if (sum === X) console.log('Yes')
else console.log('No')