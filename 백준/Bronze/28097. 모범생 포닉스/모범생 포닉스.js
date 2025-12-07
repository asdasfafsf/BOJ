const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const N = Number(input[0])
const arr = input[1].split(' ').map(Number)

let total = 0
for (let i = 0; i < N; i++) total += arr[i]
if (N > 1) total += (N - 1) * 8

const day = Math.floor(total / 24)
const hour = total % 24
console.log(day + ' ' + hour)