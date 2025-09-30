const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const [A, B] = input[0].split(' ').map(Number)
const C = Number(input[1])

const total = A + B
const need = 2 * C

if (total >= need) {
    console.log(total - need)
} else {
    console.log(total)
}