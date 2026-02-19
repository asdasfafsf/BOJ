const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()

const N = Number(input)

let result = ''

for (let i = N; i >= 1; i--) {
    result += ' '.repeat(N - i) + '*'.repeat(i)
    if (i !== 1) result += '\n'
}

console.log(result)