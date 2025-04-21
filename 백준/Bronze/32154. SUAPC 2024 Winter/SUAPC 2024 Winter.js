const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

const answers = [
  [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13],
  [1, 3, 5, 6, 7, 8, 9, 12, 13],
  [1, 3, 5, 6, 7, 8, 9, 12, 13],
  [1, 2, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 2, 3, 6, 7, 8, 12, 13]
];

const result = answers[n - 1];
console.log(result.length);
console.log(result.map(x => String.fromCharCode(x + 64)).join(' '));