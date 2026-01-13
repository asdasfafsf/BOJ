const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(Number)

const N = input[0]
const arr = input.slice(1)

let left = 0
let maxL = 0
for (let i = 0; i < N; i++) {
  if (arr[i] > maxL) {
    maxL = arr[i]
    left++
  }
}

let right = 0
let maxR = 0
for (let i = N - 1; i >= 0; i--) {
  if (arr[i] > maxR) {
    maxR = arr[i]
    right++
  }
}

console.log(left)
console.log(right)