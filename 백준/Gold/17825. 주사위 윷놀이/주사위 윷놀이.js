const dice = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const next = [
  ...Array.from(Array(21), (_, k) => k + 1),
  21,
  23, 24, 25, 26, 27,
  20, 29, 30, 25, 32, 25, 0, 0
];
const visited = Array(34).fill(false);
const point = Array(4).fill(0);
const directions = Array(34).fill(0);
directions[5] = 22;
directions[10] = 31;
directions[15] = 28;


const scores = [
  ...Array.from(Array(21), (_, k) => k * 2),
  0, 13, 16, 19, 25, 30, 35, 28, 27, 26, 22, 24, 0, 0
];

let answer = 0;

const recursion = (depth, value) => {
  if (depth === 10) {
    answer = Math.max(value, answer);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const prevPos = point[i];
    let newPos = prevPos;
    let moveCount = dice[depth];

    if (directions[newPos]) {
      newPos = directions[newPos];
      moveCount--;
    }

    while (moveCount--) {
      newPos = next[newPos];
    }

    if (newPos !== 21 && visited[newPos]) {
      continue;
    }


    visited[prevPos] = false;
    visited[newPos] = true;
    point[i] = newPos;

    recursion(depth + 1, value + scores[newPos]);

    visited[prevPos] = true;
    visited[newPos] = false;
    point[i] = prevPos;
  }
};

recursion(0, 0);
console.log(answer);