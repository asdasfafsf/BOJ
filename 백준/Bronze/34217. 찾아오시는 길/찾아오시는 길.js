const [A, B, C, D] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\s+/)
  .map(Number)

if (A + C < B + D) console.log('Hanyang Univ.')
else if (A + C > B + D) console.log('Yongdap')
else console.log('Either')