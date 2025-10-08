const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')


const T = +input[0]
let res = []
for (let i = 1; i <= T; i++) {
    let N = +input[i]
    res.push(N * N)
}
console.log(res.join('\n'))