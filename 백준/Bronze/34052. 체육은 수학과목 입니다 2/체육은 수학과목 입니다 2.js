const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)

if (input.reduce((a, b) => a + b, 0) + 300 <= 1800) {
    console.log('Yes')
} else {
    console.log('No')
}