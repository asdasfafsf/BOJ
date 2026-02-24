const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = Number(input[0])

let result = ''

for (let i = 0; i < N; i++) {
    result += ' '.repeat(i) + '*'.repeat(2 * (N - i) - 1)
    if (i !== N - 1) result += '\n'
}

console.log(result)