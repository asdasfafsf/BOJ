const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const me = input[0]
const N = Number(input[1])
let cnt = 0
for (let i = 2; i < 2 + N; i++) {
    if (input[i] === me) cnt++
}
console.log(cnt)