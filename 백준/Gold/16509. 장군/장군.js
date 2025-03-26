const [[R1, C1], [R2, C2]] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number));

const dist = Array.from(Array(10), () => Array(9).fill(Infinity));
const queue = [[R1, C1, 0]];
dist[R1][C1] = 0;
let current = 0;
const moves = [
  [[-1, 0], [-1, -1], [-1, -1]],
  [[-1, 0], [-1, 1], [-1, 1]],
  [[1, 0], [1, -1], [1, -1]],
  [[1, 0], [1, 1], [1, 1]],
  [[0, -1], [-1, -1], [-1, -1]],
  [[0, -1], [1, -1], [1, -1]],
  [[0, 1], [-1, 1], [-1, 1]],
  [[0, 1], [1, 1], [1, 1]],
];

while (queue.length !== current) {
  const [y, x, d] = queue[current];

  for (const [[dy1, dx1], [dy2, dx2], [dy3, dx3]] of moves) {
    const ny1 = y + dy1;
    const nx1 = x + dx1;
    if (ny1 < 0 || ny1 >= 10 || nx1 < 0 || nx1 >= 9) continue;
    if (ny1 === R2 && nx1 === C2) continue;

    const ny2 = ny1 + dy2;
    const nx2 = nx1 + dx2;
    if (ny2 < 0 || ny2 >= 10 || nx2 < 0 || nx2 >= 9) continue;
    if (ny2 === R2 && nx2 === C2) continue;

    const ny3 = ny2 + dy3;
    const nx3 = nx2 + dx3;
    if (ny3 < 0 || ny3 >= 10 || nx3 < 0 || nx3 >= 9) continue;

    if (dist[ny3][nx3] > d + 1) {
      dist[ny3][nx3] = d + 1;
      queue.push([ny3, nx3, d + 1]);
    }
  }
  current++;
}

console.log(dist[R2][C2] === Infinity ? -1 : dist[R2][C2]);