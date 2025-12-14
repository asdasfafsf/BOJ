const fs = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);

const a = fs[0];
const x = fs[1];
const b = fs[2];
const y = fs[3];
const T = fs[4];

const days = 21;

const cost1 = a + Math.max(0, T - 30) * x * days;
const cost2 = b + Math.max(0, T - 45) * y * days;

console.log(cost1 + ' ' + cost2);