const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim();

let n = +input;
let result = 1;

for (let i = 2; i <= n; i++) {
  result *= i;
}

console.log(result);