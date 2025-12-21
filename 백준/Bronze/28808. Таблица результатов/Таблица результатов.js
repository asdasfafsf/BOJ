const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const [n, m] = input[0].split(' ').map(Number)
let count = 0

for (let i = 1; i <= n; i++) {
    if (input[i].includes('+')) {
        count++
    }
}

console.log(count)