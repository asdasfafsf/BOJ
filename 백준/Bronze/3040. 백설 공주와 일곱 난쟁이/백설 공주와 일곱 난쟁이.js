const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.trim())
    .filter(v => v.length)

const a = input.map(Number)
const sum = a.reduce((acc, v) => acc + v, 0)

let x = -1
let y = -1

for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (sum - a[i] - a[j] === 100) {
            x = i
            y = j
            break
        }
    }
    if (x !== -1) break
}

const res = []
for (let i = 0; i < 9; i++) {
    if (i === x || i === y) continue
    res.push(a[i])
}


process.stdout.write(res.join('\n'))