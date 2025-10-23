const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number)
const [A, B, C] = input

let result = 'N'

const nums = [A, B, C]

for (let i = 0; i < 1 << 3; i++) {
    if (i === 0) continue
    let sum = 0
    for (let j = 0; j < 3; j++) {
        if (i & (1 << j)) sum += nums[j]
    }
    if (sum === 0) result = 'S'
}

for (let i = 1; i < 1 << 3; i++) {
    for (let mask = 0; mask < 1 << 3; mask++) {
        let sum = 0
        for (let j = 0; j < 3; j++) {
            if (i & (1 << j)) sum += (mask & (1 << j)) ? nums[j] : -nums[j]
        }
        if (sum === 0) result = 'S'
    }
}

console.log(result)