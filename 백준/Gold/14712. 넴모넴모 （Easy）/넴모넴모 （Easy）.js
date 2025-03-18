const [N, M] = require('fs')
  .readFileSync(0, 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let count = 0;
const grid = Array.from(Array(N), () => Array(M).fill(0));

const recursion = depth => {
  if (depth === N * M) {
    count++;
    return;
  }
  const r = Math.floor(depth / M);
  const c = depth % M;

  grid[r][c] = 0;
  recursion(depth + 1);
  grid[r][c] = 1;
  if (
    r === 0 ||
    c === 0 ||
    !(grid[r - 1][c] && grid[r][c - 1] && grid[r - 1][c - 1])
  ) {
    recursion(depth + 1);
  }
  grid[r][c] = 0;
};

recursion(0);
console.log(count);