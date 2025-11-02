const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')

const score = { K: 0, k: 0, P: 1, p: 1, N: 3, n: 3, B: 3, b: 3, R: 5, r: 5, Q: 9, q: 9 }
let white = 0
let black = 0

for (let line of input) {
  for (let c of line) {
    if (c === '.') continue
    if (c >= 'A' && c <= 'Z') white += score[c]
    else black += score[c]
  }
}

console.log(white - black)