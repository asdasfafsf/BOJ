const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

const first = input * 0.78;
const second = input * 0.956;

console.log(`${Math.floor(first)} ${Math.floor(second)}`);