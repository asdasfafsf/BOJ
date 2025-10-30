const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number)
const T = input[0]
const answers = input.slice(1)
console.log(answers.filter(v => v === T).length)