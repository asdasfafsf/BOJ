const [m, Seed, X1, X2] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\s+/)
  .map(Number);

for (let a = 0; a < m; a++) {
  for (let c = 0; c < m; c++) {
    if ((a * Seed + c) % m === X1 && (a * X1 + c) % m === X2) {
      console.log(a, c);
      process.exit(0);
    }
  }
}