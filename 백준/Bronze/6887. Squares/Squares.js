const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()

const n = parseInt(input)
const side = Math.floor(Math.sqrt(n))
console.log(`The largest square has side length ${side}.`)