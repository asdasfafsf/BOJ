const fs = require('fs');

const a = Number(fs.readFileSync(0, 'utf8').trim());
const p1 = a / 100;
const p2 = 1 - p1;

const r1 = 1 / p1;
const r2 = 1 / p2;

console.log(r1.toFixed(10));
console.log(r2.toFixed(10));