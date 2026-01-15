const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()

if (input.length === 0) {
    console.log(0)
} else {
    console.log(input.split(',').length)
}