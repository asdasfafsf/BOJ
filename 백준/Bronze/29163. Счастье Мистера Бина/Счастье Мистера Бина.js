const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let even = 0, odd = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
console.log(even > odd ? 'Happy' : 'Sad');