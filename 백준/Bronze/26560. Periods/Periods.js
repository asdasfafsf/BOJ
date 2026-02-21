const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .split('\n')

let n = Number(input[0])
let result = []

for (let i = 1; i <= n; i++) {
    let line = input[i] ?? ''
    if (line.endsWith('.')) {
        result.push(line)
    } else {
        result.push(line + '.')
    }
}

console.log(result.join('\n'))