const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const graph = Array.from(Array(N + 1), () => []);
const weights = Array(N + 1).fill(0);
const visited = Array(N + 1).fill(false);

for (let i = 1; i < input.length; i++) {
  const [t, a, p] = input[i].split(' ');

  graph[i + 1].push(+p);
  graph[+p].push(i + 1);
  weights[i + 1] = (t === 'S' ? +a : -a);
}

const recursion = (node) => {
  visited[node] = true;
  let total = weights[node];

  for (const nextNode of graph[node]) {
    if (!visited[nextNode]) {
      total += Math.max(0, recursion(nextNode));
    }
  }

  return total;
};

visited[1] = true;
console.log(Math.max(0, recursion(1)));