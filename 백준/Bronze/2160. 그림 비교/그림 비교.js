const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const N = Number(input[0]);

const pictures = [];
let idx = 1;
for (let i = 0; i < N; i++) {
  const pic = [];
  for (let j = 0; j < 5; j++) {
    pic.push(input[idx++]);
  }
  pictures.push(pic);
}

let minDiff = Infinity;
let result = [0, 0];

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let diff = 0;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 7; c++) {
        if (pictures[i][r][c] !== pictures[j][r][c]) {
          diff++;
        }
      }
    }
    if (diff < minDiff) {
      minDiff = diff;
      result = [i + 1, j + 1];
    }
  }
}

console.log(result[0] + ' ' + result[1]);