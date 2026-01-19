const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = Number(input[0].trim())
const S = (input[1] || '').trim()

let out = []
for (let i = 0; i < N - 1; i++) {
    if (S[i + 1] === 'J') out.push(S[i])
}

process.stdout.write(out.join('\n'))