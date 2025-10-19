const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .split('\n')

for (let i = 0; i < input.length; i++) {
    if (input[i].trim() === 'END') break
    console.log(input[i].split('').reverse().join(''))
}