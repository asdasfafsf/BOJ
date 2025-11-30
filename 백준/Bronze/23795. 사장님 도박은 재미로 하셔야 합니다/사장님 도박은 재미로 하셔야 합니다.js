const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')

let sum = 0
for (let i = 0; i < input.length; i++) {
    const v = Number(input[i])
    if (v === -1) break
    sum += v
}

console.log(sum)