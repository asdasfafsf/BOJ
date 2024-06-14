const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim();

console.log(input.charCodeAt(0) - '가'.charCodeAt(0) + 1)