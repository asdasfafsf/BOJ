const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

for (let i = 0; i < input.length; i++) {
    const n = input[i].trim()
    if (n === '0') break
    if (BigInt(n) % 42n === 0n) {
        console.log('PREMIADO')
    } else {
        console.log('TENTE NOVAMENTE')
    }
}