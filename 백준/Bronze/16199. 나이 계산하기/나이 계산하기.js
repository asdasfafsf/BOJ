const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')

const [by, bm, bd] = input[0].split(' ').map(Number)
const [cy, cm, cd] = input[1].split(' ').map(Number)

let man = cy - by
if (cm < bm || (cm === bm && cd < bd)) man -= 1

let se = cy - by + 1
let yeon = cy - by

console.log(man)
console.log(se)
console.log(yeon)