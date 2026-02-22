const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

let nums = input
let answer = 1

function gcd(a, b) {
    while (b !== 0) {
        let t = a % b
        a = b
        b = t
    }
    return a
}

function lcm(a, b) {
    return a / gcd(a, b) * b
}

for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
        for (let k = j + 1; k < 5; k++) {
            let current = lcm(lcm(nums[i], nums[j]), nums[k])
            if (answer === 1 || current < answer) answer = current
        }
    }
}

console.log(answer)