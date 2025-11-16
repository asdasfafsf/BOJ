const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
let T = Number(input[0])
let out = []
for (let i = 1; i <= T; i++) {
    let N = Number(input[i])
    if (N >= 5) out.push(0)
    else {
        let r = 1
        for (let j = 1; j <= N; j++) r = (r * j) % 10
        out.push(r)
    }
}
console.log(out.join('\n'))