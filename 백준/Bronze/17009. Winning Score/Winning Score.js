const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number)

const apples = input[0] * 3 + input[1] * 2 + input[2]
const bananas = input[3] * 3 + input[4] * 2 + input[5]

if (apples > bananas) console.log('A')
else if (bananas > apples) console.log('B')
else console.log('T')