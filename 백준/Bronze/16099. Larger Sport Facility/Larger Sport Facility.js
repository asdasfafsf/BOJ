const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const t = Number(input[0])
for (let i = 1; i <= t; i++) {
    const [lt, wt, le, we] = input[i].split(' ').map(Number)
    const areaT = lt * wt
    const areaE = le * we
    if (areaT > areaE) console.log('TelecomParisTech')
    else if (areaT < areaE) console.log('Eurecom')
    else console.log('Tie')
}