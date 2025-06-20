const [[N], ...lines] = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number));

lines.sort((a, b) => a[0] - b[0]);

let [curStart, curEnd] = lines[0];
let answer = 0;

for (let i = 1; i < lines.length; i++) {
  const [s, e] = lines[i];
  if (s <= curEnd) {
    curEnd = Math.max(curEnd, e);
  } else {
    answer += curEnd - curStart;
    curStart = s;
    curEnd = e;
  }
}

answer += curEnd - curStart;
console.log(answer);