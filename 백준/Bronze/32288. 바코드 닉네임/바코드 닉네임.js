const fs = require('fs')

const input = fs.readFileSync(0, 'utf-8').trim().split('\n')
const s = input[1]

let result = ''
for (const c of s) {
  result += c === 'l' ? 'L' : 'i'
}

console.log(result)