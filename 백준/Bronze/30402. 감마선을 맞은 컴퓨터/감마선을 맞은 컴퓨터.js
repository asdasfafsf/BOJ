const input = require('fs').readFileSync(0,'utf-8').trim().split(/\s+/)
let hasW = false
let hasB = false
let hasG = false

for (let c of input) {
    if (c === 'w') hasW = true
    else if (c === 'b') hasB = true
    else if (c === 'g') hasG = true
}

if (hasW) console.log('chunbae')
else if (hasB) console.log('nabi')
else console.log('yeongcheol')