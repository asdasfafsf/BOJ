const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const words = input;

const len = words.reduce((pv, cv) => pv + cv.length, 0);
const minGaps = N - 1;
const extra = M - len;
const baseGap = Math.floor(extra / minGaps);
let remain = extra % minGaps;

for (let i = 1; i < N; i++) {
  if (remain > 0 && words[i][0] >= 'a' && words[i][0] <= 'z') {
    words[i] = '_' + words[i];
    remain--;
  }
}

for (let i = N - 1; i > 0; i--) {
  if (remain > 0 && words[i][0] >= 'A' && words[i][0] <= 'Z') {
    words[i] = '_' + words[i];
    remain--;
  }
}

const answer = words.join('_'.repeat(baseGap));
console.log(answer);