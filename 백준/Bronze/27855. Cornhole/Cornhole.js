const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/)

const H1 = Number(input[0])
const B1 = Number(input[1])
const H2 = Number(input[2])
const B2 = Number(input[3])

const s1 = H1 * 3 + B1
const s2 = H2 * 3 + B2

if (s1 === s2) {
    console.log('NO SCORE')
} else if (s1 > s2) {
    console.log(1, s1 - s2)
} else {
    console.log(2, s2 - s1)
}