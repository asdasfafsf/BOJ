const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const T = Number(input[0])
for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ')
    console.log(a === b ? 'OK' : 'ERROR')
}