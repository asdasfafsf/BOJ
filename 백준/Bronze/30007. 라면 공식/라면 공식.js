const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n')

const N = Number(input[0])
for (let i = 1; i <= N; i++) {
    const [A, B, X] = input[i].split(' ').map(Number)
    console.log(A * (X - 1) + B)
}