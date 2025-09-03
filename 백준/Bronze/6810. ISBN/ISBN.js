const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number)

const digits = [9,7,8,0,9,2,1,4,1,8, ...input]

let sum = 0
for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
        sum += digits[i] * 1
    } else {
        sum += digits[i] * 3
    }
}

console.log("The 1-3-sum is " + sum)