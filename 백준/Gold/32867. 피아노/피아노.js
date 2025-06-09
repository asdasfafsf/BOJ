const [[N, K], keyboard] = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number));

let answer = 0;
let left = keyboard[0];
let right = keyboard[0];

for (const x of keyboard) {
  if (x < left) { 
    left = x;
  }

  if (x > right) {
    right = x;
  }

  if (right - left >= K) {
    answer++;
    left = right = x;
  }
}

console.log(answer);