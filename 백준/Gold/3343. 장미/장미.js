let [n, a, b, c, d] = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);


if (b * c < d * a) {
  [a, c] = [c, a];
  [b, d] = [d, b];
}

let answer = Infinity;
for (let i = 0; i < c; i++) {
  const requiredBundles = Math.ceil((n - i * a) / c);
  const bundleCost = i * b + Math.max(0, requiredBundles) * d;
  answer = Math.min(answer, bundleCost);

  if (requiredBundles <= 0) break;
}

console.log(answer);