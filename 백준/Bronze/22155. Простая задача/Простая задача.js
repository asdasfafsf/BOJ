const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const n = parseInt(input[0])

for (let idx = 1; idx <= n; idx++) {
    const [i, f] = input[idx].split(' ').map(Number)
  
    if ((i <= 1 && f <= 2) || (i <= 2 && f <= 1)) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}