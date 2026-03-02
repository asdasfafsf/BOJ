const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let T = Number(input[0])
let result = []

for (let i = 1; i <= T; i++) {
    let n = Number(input[i])
    let s = ''
    let five = Math.floor(n / 5)
    let one = n % 5

    for (let j = 0; j < five; j++) {
        s += '++++ '
    }

    s += '|'.repeat(one)

    result.push(s.trimEnd())
}

console.log(result.join('\n'))