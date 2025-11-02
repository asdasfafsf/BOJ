const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').trim().split('\n')
let t = Number(input[0])
let result = ''
for (let i = 1; i <= t; i++) {
  let [a, b] = input[i].split(' ').map(Number)
  result += (a + b) + '\n'
}
console.log(result)