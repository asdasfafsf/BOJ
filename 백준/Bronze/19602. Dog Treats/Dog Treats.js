const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')

const S = Number(input[0])
const M = Number(input[1])
const L = Number(input[2])

const score = S + 2 * M + 3 * L

if (score >= 10) {
  console.log('happy')
} else {
  console.log('sad')
}