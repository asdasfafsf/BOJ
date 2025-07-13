const [H, I, A, R, C] = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split(' ')
    .map(Number);

const result = H * I - A * R * C;
console.log(result);