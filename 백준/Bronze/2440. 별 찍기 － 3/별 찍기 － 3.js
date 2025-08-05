const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()

const N = Number(input)

for (let i = N; i >= 1; i--) {
    console.log('*'.repeat(i))
}