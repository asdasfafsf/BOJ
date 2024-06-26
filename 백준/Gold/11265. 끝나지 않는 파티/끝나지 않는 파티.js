const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');



const [N, M] = input[0].split(' ').map(Number);

const dist = [];

for (let i = 1; i <= N; i++) {
  dist.push(input[i].split(' ').map(Number));
}


for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k])
    }
  }
}

const answer = [];

for (let i = N + 1; i < input.length; i++) {
  const [s, e, t] = input[i].split(' ').map(Number);

  const distance = dist[s - 1][e - 1];

  
  if (distance <= t) {
    answer.push('Enjoy other party');
  } else {
    answer.push('Stay here');
  }
}

console.log(answer.join('\n'))