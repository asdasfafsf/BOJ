const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = Number(input[0])
const before = input[1]
const after = input[2]

let result = ''

if (N % 2 === 0) {
    result = before
} else {
    for (let i = 0; i < before.length; i++) {
        result += before[i] === '0' ? '1' : '0'
    }
}

console.log(result === after ? "Deletion succeeded" : "Deletion failed")