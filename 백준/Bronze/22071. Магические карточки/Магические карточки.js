const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');

let index = 0;
let t = +input[index++];
const answer = [];

while (t--) {
  const [n, l] = input[index++].split(' ').map(Number);
  const a = input[index++]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
    .slice(0, l)
    .reduce((pv, cv) => pv + cv, 0);

  const b = input[index++]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a)
    .slice(0, l)
    .reduce((pv, cv) => pv + cv, 0);


  if (a > b) {
    answer.push('YES')
  } else {
    answer.push('NO')
  }
}

console.log(answer.join('\n'));