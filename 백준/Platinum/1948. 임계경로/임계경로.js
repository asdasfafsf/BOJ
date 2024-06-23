const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const m = +input[1];

const graph = Array.from(Array(n + 1), () => []);
const reverseGraph = Array.from(Array(n + 1), () => []);
const inDegree = Array(n + 1).fill(0);
const dist = Array(n + 1).fill(0);

for (let i = 2; i < 2 + m; i++) {
  const [s, e, time] = input[i].split(' ').map(Number);
  graph[s].push([e, time]);
  reverseGraph[e].push([s, time]);
  inDegree[e]++;
}

const [start, end] = input[2 + m].split(' ').map(Number);

const topoQueue = [];
const topoOrder = [];

for (let i = 1; i <= n; i++) {
  if (inDegree[i] === 0) topoQueue.push(i);
}

let current = 0;
while (topoQueue.length !== current) {
  const node = topoQueue[current]
  topoOrder.push(node);

  for (const [next, time] of graph[node]) {
    inDegree[next]--;
    if (inDegree[next] === 0) topoQueue.push(next);
  }

  current++;
}

dist[start] = 0;
for (const node of topoOrder) {
  for (const [next, time] of graph[node]) {
    if (dist[next] < dist[node] + time) {
      dist[next] = dist[node] + time;
    }
  }
}

const longestPath = dist[end];
let roadCount = 0;

const visited = Array(n + 1).fill(false);
const stack = [end];
visited[end] = true;

while (stack.length) {
  const node = stack.pop();

  for (const [prev, time] of reverseGraph[node]) {
    if (dist[prev] + time === dist[node]) {
      roadCount++;
      if (!visited[prev]) {
        visited[prev] = true;
        stack.push(prev);
      }
    }
  }
}

console.log(longestPath);
console.log(roadCount);