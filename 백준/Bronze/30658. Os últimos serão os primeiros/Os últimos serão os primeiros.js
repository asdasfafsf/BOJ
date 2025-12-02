const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n');

let idx = 0;
let out = [];

while (true) {
  let n = Number(input[idx++]);
  if (n === 0) break;

  let arr = [];
  for (let i = 0; i < n; i++) arr.push(Number(input[idx++]));

  for (let i = n - 1; i >= 0; i--) out.push(arr[i].toString());
  out.push('0');
}

console.log(out.join('\n'));