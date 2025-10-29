const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const x = parseFloat(input[0])

const mile = 1609.344
const gallon = 3.785411784

const result = (100 * gallon) / (x * mile / 1000)
console.log(result.toFixed(6))