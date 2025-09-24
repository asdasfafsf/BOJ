const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const n = parseInt(input[0])
for (let i = 1; i <= n; i++) {
    const x = parseInt(input[i])
    if (x % 2 === 0) {
        console.log(`${x} is even`)
    } else {
        console.log(`${x} is odd`)
    }
}