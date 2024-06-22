const [[N, K], importances] = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number));;

const sorted = importances.map((elem, index) => [index, elem])
  .sort((a, b) => b[1] - a[1]);

const answer = [];

const visited = Array(N).fill(0);
for (let i = 0; i < K; i++) {
  if (typeof sorted[i] === 'undefined') {
    answer.push(0)
    continue;
  }

  answer.push(sorted[i][0] + 1);
  visited[sorted[i][0]] = sorted[i][0] + 1;
}

console.log(answer.join('\n'));
console.log(visited.join('\n'))