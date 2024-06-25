const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');


const [n, k] = input[0].split(' ').map(Number);
const dist = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity))

for (let i = 1; i <= k; i++) {
  const [s, e] = input[i].split(' ').map(Number);
  dist[s][e] = 1;
}


for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
    }
  }
}


const s = input[k + 1];
const answer = [];

for (let i = k + 2; i < input.length; i++) {
  const [y, x] = input[i].split(' ').map(Number);
  
  if (dist[y][x] < Infinity && dist[y][x] > 0) {
    answer.push(-1);
  } else if (dist[x][y] < Infinity && dist[x][y] > 0) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join('\n'))