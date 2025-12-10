const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')

const N = Number(input[0])
const lines = input.slice(1)

const origin = new Set([
  'Never gonna give you up',
  'Never gonna let you down',
  'Never gonna run around and desert you',
  'Never gonna make you cry',
  'Never gonna say goodbye',
  'Never gonna tell a lie and hurt you',
  'Never gonna stop'
])

let changed = false
for (let i = 0; i < N; i++) {
  if (!origin.has(lines[i])) {
    changed = true
    break
  }
}

console.log(changed ? 'Yes' : 'No')