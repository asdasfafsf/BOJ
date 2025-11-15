const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const N = Number(input[0])
const [A, B, C] = input[1].split(' ').map(Number)

let ans = 0
ans += Math.min(N, A)
ans += Math.min(N, B)
ans += Math.min(N, C)

console.log(ans)