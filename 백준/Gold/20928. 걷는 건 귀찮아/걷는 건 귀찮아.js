const [[N, M], p, x] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(line => line.split(' ').map(Number));

let answer = 0;
let currentReach = p[0];
let maxReach = p[0] + x[0];
let i = 1;

while (maxReach < M) {
  let nextReach = maxReach;
  while (i < N && p[i] <= maxReach) {
    nextReach = Math.max(nextReach, p[i] + x[i]);
    i++;
  }

  if (nextReach === maxReach) {
    console.log(-1);
    process.exit(0);
  }

  maxReach = nextReach;
  answer++;
}

console.log(answer);