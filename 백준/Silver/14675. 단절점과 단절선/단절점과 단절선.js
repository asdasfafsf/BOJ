const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')



let index = 0
const N = +input[index];
const graph = Array.from({length : N + 1}, () => 0);


for (let i = 0; i < N - 1; i++) {
    const [start, end] = input[++index].split(' ').map(Number);
    graph[start]++;
    graph[end]++;
}

const q = +input[++index];
const answer = [];

for (let i = 0; i < q; i++) {
    const [t, vertex] = input[++index].split(' ').map(Number);

    if (t === 1)  {
        const dests = graph[vertex];
        const isCutVertex = dests > 1;

        answer.push(isCutVertex ? 'yes' : 'no')

    } else {
        answer.push('yes');
    }
}

console.log(answer.join('\n'))