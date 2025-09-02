const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const [D, H, M] = input

const startDay = 11
const startHour = 11
const startMinute = 11

let startTotal = startDay * 24 * 60 + startHour * 60 + startMinute
let endTotal = D * 24 * 60 + H * 60 + M

let diff = endTotal - startTotal

if (diff < 0) {
    console.log(-1)
} else {
    console.log(diff)
}