const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')


const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({length: N + 1}, () => []);
const de = Array.from({length: N + 1}, () => 0);

for (let i = 1; i < input.length; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    graph[start].push(end);
    de[end]++;
}

const queue = []
for (let i = 1; i < de.length; i++) {
    if (de[i] === 0) {
        queue.push(i);
    }
}

let current = 0;

while (queue.length !== current) {
    const num = queue[current];

    for (const nextNum of graph[num]) {
        de[nextNum]--;

        if (de[nextNum] === 0) {
            queue.push(nextNum);
        }
    }

    current++;
}

console.log(queue.join(' '))