const fs = require('fs');
const [H, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let newM = M - 45;
let newH = H;

if (newM < 0) {
  newM += 60;
  newH -= 1;
  if (newH < 0) {
    newH = 23;
  }
}

console.log(newH, newM);