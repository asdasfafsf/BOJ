const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/)
const N = Number(input[0])
const friends = input.slice(1, 1 + N)
const hellobit = input[1 + N]
console.log(friends.filter(v => v === hellobit).length)