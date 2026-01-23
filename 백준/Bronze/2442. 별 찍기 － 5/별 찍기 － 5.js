const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = Number(input[0])
let out = ''

for (let i = 1; i <= N; i++) {
    out += ' '.repeat(N - i) + '*'.repeat(2 * i - 1) + '\n'
}

process.stdout.write(out)