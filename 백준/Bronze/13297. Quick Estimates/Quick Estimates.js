const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = Number(input[0])
for (let i = 1; i <= N; i++) {
    console.log(input[i].trim().length)
}