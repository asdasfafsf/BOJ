const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
const sum = input[0] + input[1] + input[2];
console.log(sum <= 21 ? 1 : 0);