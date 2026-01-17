const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number)

const p1 = input[0]
const s1 = input[1]
const s2 = input[2]
const p2 = input[3]

const persepolisSum = p1 + p2
const esteghlalSum = s1 + s2

if (persepolisSum > esteghlalSum) {
    console.log('Persepolis')
} else if (persepolisSum < esteghlalSum) {
    console.log('Esteghlal')
} else {
    if (p2 > s1) {
        console.log('Persepolis')
    } else if (p2 < s1) {
        console.log('Esteghlal')
    } else {
        console.log('Penalty')
    }
}