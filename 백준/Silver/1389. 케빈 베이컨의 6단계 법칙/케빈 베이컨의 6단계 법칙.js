
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1)
    .map(elem => elem.split(' ').map(Number));


const graph = Array.from({length: N + 1}, () => []);


for (let i = 0; i < arr.length; i++) {
    const [s, e] = arr[i];
    graph[s].push(e);
    graph[e].push(s);
}


const bfs = (start) => {
    const queue = [];
    let current = 0;
    queue.push(start);
    const dist = new Array(N + 1).fill(0);

    while (queue.length !== current) {
        const data = queue[current];

        for (const node of graph[data]) {
            if (node !== start && dist[node] === 0) {
                queue.push(node);
                dist[node] = dist[data] + 1
            }
        }

        current++;
    }

    return dist.reduce((pv, cv) => pv + cv, 0);
}

let min = bfs(1);
let answer = 1;

for (let i = 2; i <= N; i++) {
    const cur = bfs(i);

    if (cur < min) {
        min = cur;
        answer = i;
    }
}

console.log(answer)
