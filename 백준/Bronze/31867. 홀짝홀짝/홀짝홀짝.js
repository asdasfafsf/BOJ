const fs = require('fs').readFileSync(0,'utf-8').trim().split('\n')

const N = Number(fs[0])
const K = fs[1]

let even = 0
let odd = 0

for (let i = 0; i < N; i++) {
  const d = K.charCodeAt(i) - 48
  if ((d & 1) === 0) even++
  else odd++
}

if (even > odd) console.log(0)
else if (odd > even) console.log(1)
else console.log(-1)