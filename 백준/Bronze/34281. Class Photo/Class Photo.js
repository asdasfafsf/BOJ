const fs = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n')

let w = Number(fs[0])
let l = Number(fs[1])

console.log(w * l)