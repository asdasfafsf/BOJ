const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let t = Number(input[0])
let vowels = new Set(['a','e','i','o','u'])
let result = []

for (let i = 1; i <= t; i++) {
    let word = input[i].trim()
    let count = 0
    for (let j = 0; j < word.length; j++) {
        if (vowels.has(word[j])) count++
    }
    result.push(`The number of vowels in ${word} is ${count}.`)
}

console.log(result.join('\n'))