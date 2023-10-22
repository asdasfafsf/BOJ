const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);

const edges = input.slice(1).map(elem => elem.split(' ').map(Number));


const bf = (V, start, edges) => {
    const dist = Array.from({length: N + 1}, () => Infinity);
    dist[start] = 0;

    for (let i = 1; i <= V; i++) {
        for (const [s, e, w] of edges) {
            if (dist[s] !== Infinity && dist[s] + w < dist[e]) {
                dist[e] = dist[s] + w;

                if (i == V) {
                    return [-1];
                }
            }
        }
    }

    return dist.slice(2).map(elem => elem === Infinity ? -1 : elem);
}

const dist = bf(N, 1, edges);
console.log(dist.join('\n'));