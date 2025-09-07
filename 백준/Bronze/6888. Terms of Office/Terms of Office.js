const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)

const X = input[0]
const Y = input[1]

for (let year = X; year <= Y; year++) {
    if ((year - X) % 60 === 0) {
        console.log(`All positions change in year ${year}`)
    }
}