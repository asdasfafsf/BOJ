const input = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number));

const [N, M] = input[0];
const before = input.slice(1, N + 1);
const after = input.slice(N + 1);

const diff = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (before[y][x] !== after[y][x]) {
      diff.push([y, x]);
    }
  }
}

if (diff.length === 0) {
  console.log('YES');
  return;
}

const [sy, sx] = diff[0];
const targetBefore = before[sy][sx];
const targetAfter = after[sy][sx];
const visited = Array.from(Array(N), () => Array(M).fill(false));
const queue = [[sy, sx]];
visited[sy][sx] = true;

let current = 0;
while (current < queue.length) {
  const [y, x] = queue[current++];
  for (const [dy, dx] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const ny = y + dy;
    const nx = x + dx;
    if (ny < 0 || ny >= N || nx < 0 || nx >= M) { 
        continue;
    }
    if (visited[ny][nx]) {
        continue;
    }
    if (before[ny][nx] !== targetBefore) {
        continue;
    }
    visited[ny][nx] = true;
    queue.push([ny, nx]);
  }
}

let ok = true;
for (const [y, x] of queue) {
  if (after[y][x] !== targetAfter) {
    ok = false;
    break;
  }
}
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (!visited[y][x] && before[y][x] !== after[y][x]) {
      ok = false;
      break;
    }
  }
  if (!ok) break;
}

console.log(ok ? 'YES' : 'NO');