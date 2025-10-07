const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)

const [A, B, C, D, E] = input

let time = 0

if (A < 0) {
    time += (-A) * C
    time += D
    time += B * E
} else {
    time += (B - A) * E
}

console.log(time)