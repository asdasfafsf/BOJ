const input = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n');



const [N, M] = input[0].split(' ').map(Number);
const [s, e] = input[1].split(' ').map(Number);
const nodes = [];

for (let i = 2; i < input.length; i++) {
   nodes.push(input[i].split(' ').map(Number));
}

nodes.sort((a, b) => b[2] - a[2]);

const parents = Array.from(Array(N + 1), (_, k) => k);
const find = a => {
   if (a === parents[a]) {
      return a;
   }

   return (parents[a] = find(parents[a]));
}
const union = (a, b) => {
   a = find(a);
   b = find(b);

   if (a === b) {
      return;
   }

   parents[Math.min(a, b)] = Math.max(a, b);
}

let answer = 0;
for (const [a, b, w] of nodes) {
   if (find(a) === find(b)) {
      continue;
   }

   union(a, b);

   if (find(s) === find(e)) {
      answer = w;
      break;
   }
}
console.log(answer)