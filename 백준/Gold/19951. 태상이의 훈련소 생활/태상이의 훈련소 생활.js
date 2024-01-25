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

let sum = changes[0];
for (let i = 1; i < changes.length; i++) {
    sum += changes[i];
    changes[i] = sum;
}

for (let i = 0; i < ground.length; i++) {
    ground[i] += changes[i]
}

console.log(ground.join(' '))