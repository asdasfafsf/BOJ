const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);


const [a, b, c, d, e, f] = input;
const y = (c * d - a * f) / (b * d - a * e);
const x = (c * e - b * f) / (a * e - b * d);

console.log(`${x} ${y}`)