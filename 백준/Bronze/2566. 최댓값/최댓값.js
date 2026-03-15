const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let max = -1
let r = 0
let c = 0

for (let i = 0; i < 9; i++) {
    const arr = input[i].split(' ').map(Number)
    for (let j = 0; j < 9; j++) {
        if (arr[j] > max) {
            max = arr[j]
            r = i + 1
            c = j + 1
        }
    }
}

console.log(max)
console.log(r, c)