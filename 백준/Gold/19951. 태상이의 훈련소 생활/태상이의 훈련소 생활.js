const [[N, M], ground, ...orders] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const changes = Array.from({length: ground.length + 1}, () => 0);

for (const order of orders) {
    const [start, end, depth] = order;

    changes[start - 1] += depth;
    changes[end] -= depth
}

let sum = 0;
for (let i = 0; i < changes.length - 1; i++) {
    sum += changes[i];
    ground[i] += sum;
}

console.log(ground.join(' '))