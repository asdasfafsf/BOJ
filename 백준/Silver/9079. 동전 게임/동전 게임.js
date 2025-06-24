const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const T = +input[0];
let index = 1;

const ops = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

for (let t = 0; t < T; t++) {
  const board = input.slice(index, index + 3)
    .flatMap(elem => elem.split(' '));
  index += 3;

  let min = Infinity;

  for (let mask = 0; mask < (1 << 8); mask++) {
    const tmp = [...board];

    for (let i = 0; i < 8; i++) {
      if (mask & (1 << i)) {
        for (const j of ops[i]) {
          tmp[j] = tmp[j] === 'H' ? 'T' : 'H';
        }
      }
    }

    const allH = tmp.every(c => c === 'H');
    const allT = tmp.every(c => c === 'T');

    if (allH || allT) {
      let count = 0;
      for (let i = 0; i < 8; i++) {
        if (mask & (1 << i)) count++;
      }
      if (count < min) min = count;
    }
  }

  console.log(min === Infinity ? -1 : min);
}