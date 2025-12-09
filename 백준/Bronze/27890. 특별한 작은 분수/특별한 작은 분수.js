const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(' ')

let x0 = Number(input[0])
let N = Number(input[1])

let x = x0
for (let t = 0; t < N; t++) {
  if (x % 2 === 0) {
    x = Math.floor(x / 2) ^ 6
  } else {
    x = (2 * x) ^ 6
  }
}

console.log(x)