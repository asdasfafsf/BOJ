const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()

const [N, M, K] = input.split(' ').map(Number)
console.log(Math.floor(K / M), K % M)