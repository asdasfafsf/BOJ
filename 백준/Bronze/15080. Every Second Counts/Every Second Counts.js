const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const [h1, m1, s1] = input[0].split(' : ').map(Number)
const [h2, m2, s2] = input[1].split(' : ').map(Number)

const t1 = h1 * 3600 + m1 * 60 + s1
const t2 = h2 * 3600 + m2 * 60 + s2

const diff = t2 >= t1 ? t2 - t1 : 86400 - (t1 - t2)

console.log(diff)