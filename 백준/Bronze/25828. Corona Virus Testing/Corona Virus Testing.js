const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number)
const [g, p, t] = input

const individual = g * p
const group = g + (t * p)

if (individual < group) console.log(1)
else if (individual > group) console.log(2)
else console.log(0)