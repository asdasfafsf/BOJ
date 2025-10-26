const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const month = Number(input[0])
const day = Number(input[1])

if (month < 2 || (month === 2 && day < 18)) console.log('Before')
else if (month > 2 || (month === 2 && day > 18)) console.log('After')
else console.log('Special')