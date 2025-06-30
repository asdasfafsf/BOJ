const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')

const A = Number(input[0])
const B = Number(input[1])

console.log(B - A)