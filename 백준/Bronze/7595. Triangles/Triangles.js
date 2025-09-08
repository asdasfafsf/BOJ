const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)

for (let i = 0; i < input.length; i++) {
    let n = input[i]
    if (n === 0) break
    for (let j = 1; j <= n; j++) {
        console.log('*'.repeat(j))
    }
}