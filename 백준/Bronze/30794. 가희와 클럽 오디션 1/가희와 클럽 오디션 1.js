const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')

const lv = Number(input[0])
const judge = input[1]

let score = 0

if (judge === 'miss') score = 0
else if (judge === 'bad') score = 200 * lv
else if (judge === 'cool') score = 400 * lv
else if (judge === 'great') score = 600 * lv
else if (judge === 'perfect') score = 1000 * lv

console.log(score)