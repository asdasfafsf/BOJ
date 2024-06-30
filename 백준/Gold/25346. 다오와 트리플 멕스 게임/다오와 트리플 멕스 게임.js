const [[N], A] = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n')
  .map(elem => elem.split(' ').map(Number))
  .map(elem => [...new Set(elem)]);


A.sort((a, b) => a - b);
if (A[0] != 0) {
  console.log(0);
  process.exit(0);
} else if (A.length === 1 && A[0] === 0) {
  console.log(1);
  process.exit(0);
}


for (let i = 0; i < A.length; i++) {
  if (i != A[i]) {
    console.log(i + 2);
    process.exit(0)
  }
}

console.log(A.length + 2);