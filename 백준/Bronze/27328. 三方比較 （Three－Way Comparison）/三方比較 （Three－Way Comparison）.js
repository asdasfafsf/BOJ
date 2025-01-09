const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);

if (A < B) {
  console.log(-1);
} else if (A > B) {
  console.log(1);
} else {
  console.log(0);
}