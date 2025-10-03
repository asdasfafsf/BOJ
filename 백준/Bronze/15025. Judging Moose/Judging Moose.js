const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const l = input[0]
const r = input[1]

if (l === 0 && r === 0) {
    console.log("Not a moose")
} else if (l === r) {
    console.log(`Even ${l + r}`)
} else {
    console.log(`Odd ${2 * Math.max(l, r)}`)
}