const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')

let idx = 0
const t = parseInt(input[idx++])
let out = []

for (let _ = 0; _ < t; _++) {
  const n = parseInt(input[idx++])
  let p1 = 0
  let p2 = 0

  for (let i = 0; i < n; i++) {
    const [a, b] = input[idx++].split(' ')
    if (a === b) continue
    if (
      (a === 'R' && b === 'S') ||
      (a === 'S' && b === 'P') ||
      (a === 'P' && b === 'R')
    ) {
      p1++
    } else {
      p2++
    }
  }

  if (p1 > p2) out.push('Player 1')
  else if (p2 > p1) out.push('Player 2')
  else out.push('TIE')
}

console.log(out.join('\n'))