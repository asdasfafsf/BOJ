const input = require('fs').readFileSync(0, 'utf-8').trim()
const N = Number(input)

for (let i = 1; i <= N; i++) {
  console.log(`Hello World, Judge ${i}!`)
}