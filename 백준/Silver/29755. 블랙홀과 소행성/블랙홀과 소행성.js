const [[N, M], b, ...p] = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number));

b.sort((a, b) => a - b);
p.sort((a, b) => a[0] - b[0]);

let answer = 0;
for (let j = 0; j < M; j++) {
  const a = p[j][0];
  const w = p[j][1];
  let l = 0;
  let r = N;
  while (l < r) {
    const m = (l + r) >> 1;
    if (b[m] < a) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  let d = Infinity;
  if (l < N) {
    const diff = b[l] - a;
    d = diff < 0 ? -diff : diff;
  }
  if (l > 0) {
    const diff = a - b[l - 1];
    const ad = diff < 0 ? -diff : diff;
    if (ad < d) {
      d = ad;
    }
  }
  const need = d * w;
  if (need > answer) {
    answer = need;
  }
}

console.log(answer);