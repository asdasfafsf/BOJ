const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const [A1, P1] = input[0].split(' ').map(Number)
const [R1, P2] = input[1].split(' ').map(Number)

const sliceValue = A1 / P1
const wholeValue = (Math.PI * R1 * R1) / P2

if (sliceValue > wholeValue) console.log('Slice of pizza')
else console.log('Whole pizza')