const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


let index = 0;
let T = +input[index];


while(T--) {
    const [N, K] = input[++index].split(' ').map(Number);
    const D = input[++index].split(' ').map(Number);

    const graph = Array.from({length: N}, () => []);
    const d = Array.from({length: N}, () => 0);
    const times = Array.from({length: N}, () => 0);

    for (let i = 0; i < K; i++) {
        const [s, e] = input[++index].split(' ').map(Number).map(elem => elem - 1);
        graph[s].push(e);
        d[e]++;
    }
    const W = input[++index];

    const queue = []
    for (let i = 0; i < d.length; i++) {
        if (d[i] === 0) {
            queue.push(i);
        }
    }

    let current = 0;

    while (queue.length !== current) {
        const node = queue[current]; 

        for (const nextNode of graph[node]) {
            d[nextNode]--;
            times[nextNode] = Math.max(times[nextNode], times[node] + D[node]);

            if (d[nextNode] === 0) {
                queue.push(nextNode);
            }
        }
        current++;
    }

    console.log(times[W - 1] + D[W - 1]);
}

