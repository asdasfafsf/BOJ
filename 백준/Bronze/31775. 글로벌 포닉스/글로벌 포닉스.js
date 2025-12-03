const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n');

let a = input[0][0];
let b = input[1][0];
let c = input[2][0];

let s = new Set([a, b, c]);

if (s.has('l') && s.has('k') && s.has('p')) console.log('GLOBAL');
else console.log('PONIX');