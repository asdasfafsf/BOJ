const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ')
const [p, r] = input.map(Number)
const v = p / r

if (v < 0.2) console.log('weak')
else if (v < 0.4) console.log('normal')
else if (v < 0.6) console.log('strong')
else console.log('very strong')