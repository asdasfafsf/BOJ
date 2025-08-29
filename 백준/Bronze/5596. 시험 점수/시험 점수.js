const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const s = input[0].split(' ').map(Number).reduce((a, b) => a + b, 0)
const t = input[1].split(' ').map(Number).reduce((a, b) => a + b, 0)

console.log(Math.max(s, t === s ? s : t))