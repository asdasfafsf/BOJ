const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);
console.log(B / A * C * 3);