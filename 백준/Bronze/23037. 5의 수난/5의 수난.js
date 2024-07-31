const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('')
    .map(Number)
    .reduce((pv, cv) => pv + Math.pow(cv, 5), 0)


console.log(input)