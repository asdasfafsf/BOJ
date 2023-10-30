

const fs = require('fs')
const answer = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split(' ')
    .map(Number)
    .reduce((pv, cv) => pv + cv, 0);

console.log(answer)