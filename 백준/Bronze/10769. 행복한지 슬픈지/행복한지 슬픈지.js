const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()

let happy = 0
let sad = 0

for (let i = 0; i < input.length - 2; i++) {
    if (input[i] === ':' && input[i + 1] === '-' && input[i + 2] === ')') happy++
    if (input[i] === ':' && input[i + 1] === '-' && input[i + 2] === '(') sad++
}

if (happy === 0 && sad === 0) console.log('none')
else if (happy === sad) console.log('unsure')
else if (happy > sad) console.log('happy')
else console.log('sad')