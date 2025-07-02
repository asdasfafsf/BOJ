const input = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number));

const [sy, sx] = input.pop();
const map = input;
const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

const queue = [[sy, sx, 0, 0, map.map(row => [...row])]];
let current = 0;
let answer = -1;

while (current < queue.length) {
  const [y, x, dist, cnt, curMap] = queue[current++];

  if (cnt === 3) {
    answer = dist;
    break;
  }

  for (const [dy, dx] of directions) {
    const ny = y + dy;
    const nx = x + dx;

    if (ny < 0 || ny >= 5 || nx < 0 || nx >= 5) {
      continue;
    }
    if (curMap[ny][nx] === -1) {
      continue;
    }

    const nextMap = curMap.map(row => [...row]);
    nextMap[y][x] = -1;

    const isApple = nextMap[ny][nx] === 1;
    queue.push([ny, nx, dist + 1, cnt + (isApple ? 1 : 0), nextMap]);
  }
}

console.log(answer);