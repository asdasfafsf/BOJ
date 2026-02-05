const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let n = Number(input[0])
let answer = ''

for (let i = 1; i <= n; i++) {
    let k = Number(input[i])
    answer += '='.repeat(k)
    if (i !== n) answer += '\n'
}

console.log(answer)