const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const V = Number(input[0])
const votes = input[1]

let A = 0
let B = 0

for (let i = 0; i < V; i++) {
    if (votes[i] === 'A') A++
    else if (votes[i] === 'B') B++
}

if (A > B) console.log('A')
else if (B > A) console.log('B')
else console.log('Tie')