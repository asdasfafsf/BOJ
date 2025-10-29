const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const s = input[1]
let sum = 0
let num = ''

for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c >= '0' && c <= '9') {
        num += c
    } else {
        if (num.length > 0) {
            sum += parseInt(num)
            num = ''
        }
    }
}
if (num.length > 0) sum += parseInt(num)
console.log(sum)