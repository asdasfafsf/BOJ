const [a, b] = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(' ');
console.log(a === b ? 1 : 0);