const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let S = input[0].replace(/[0-9]/g,'')
let K = input[1]

console.log(S.includes(K) ? 1 : 0)