const fs = require('fs');
const [m, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(m % k === 0 ? 'Yes' : 'No');