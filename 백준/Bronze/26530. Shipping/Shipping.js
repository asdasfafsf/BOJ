const data = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/);

let idx = 0;
const n = parseInt(data[idx++], 10);
let res = [];

for (let i = 0; i < n; i++) {
  const x = parseInt(data[idx++], 10);
  let sum = 0;

  for (let j = 0; j < x; j++) {
    data[idx++];
    const q = parseInt(data[idx++], 10);
    const p = parseFloat(data[idx++]);
    sum += q * p;
  }

  res.push(`$${sum.toFixed(2)}`);
}

console.log(res.join('\n'));