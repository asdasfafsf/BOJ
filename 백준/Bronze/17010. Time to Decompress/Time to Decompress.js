const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const L = Number(input[0])
for (let i = 1; i <= L; i++) {
    const [n, c] = input[i].split(' ')
    console.log(c.repeat(Number(n)))
}