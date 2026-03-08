const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .split('\n')

let count = 0

for (let line of input) {
    let idx = 0
    while (true) {
        idx = line.indexOf('joke', idx)
        if (idx === -1) break
        count++
        idx++
    }
}

console.log(count)