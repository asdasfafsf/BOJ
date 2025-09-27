const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

const [A, B, C] = input

if (A !== B && A !== C && B === C) {
    console.log('A')
} else if (B !== A && B !== C && A === C) {
    console.log('B')
} else if (C !== A && C !== B && A === B) {
    console.log('C')
} else {
    console.log('*')
}