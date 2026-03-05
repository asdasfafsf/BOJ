const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .split('\n')

let doc = input[0]
let word = input[1]
let count = 0

for (let i = 0; i <= doc.length - word.length; ) {
    if (doc.slice(i, i + word.length) === word) {
        count++
        i += word.length
    } else {
        i++
    }
}

console.log(count)