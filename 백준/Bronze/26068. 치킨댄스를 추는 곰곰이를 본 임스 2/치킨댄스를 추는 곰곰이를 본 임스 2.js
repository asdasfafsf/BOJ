const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
let N = Number(input[0])
let c = 0
for (let i = 1; i <= N; i++) {
    let x = Number(input[i].slice(2))
    if (x <= 90) c++
}
console.log(c)