const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const graph = { 'Baba': []};
const visited = {};

for (let i = 1; i < input.length; i++) {
    const [A, B] = input[i].split(' is ');

    if (!graph[A]) {
        graph[A] = [];
    }

    graph[A].push(B);
}

const queue = ['Baba'];
let current = 0;
visited['Baba'] = true;

while (queue.length !== current) {
    const name = queue[current];

    if (graph[name]) {
        for (const nextName of graph[name]) {
            if (!visited[nextName]) {
                visited[nextName] = true;
                queue.push(nextName);
            }
        }
    }

    current++;
}

const answer = queue.slice(1).sort((a, b) => a.localeCompare(b));
if (answer.length) {
    console.log(answer.join('\n').trim())
}