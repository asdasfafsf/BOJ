const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n), () => []);

for (let i = 1; i <= m; i++) {
    const [s, e] = input[i].split(' ').map(elem => elem - 1);
    graph[s].push(e);
    graph[e].push(s);
}

const group = Array(n).fill(-1);
let totalMin = 0;

for (let i = 0; i < n; i++) {
    if (group[i] === -1) {
        const counts = [0, 0];
        const queue = [i];
        group[i] = 0;
        counts[0]++;

        let current = 0;

        while (queue.length !== current) {
            const node = queue[current++];

            for (const nextNode of graph[node]) {
                if (group[nextNode] === -1) {
                    group[nextNode] = group[node] ^ 1; 
                    queue.push(nextNode);
                    counts[group[nextNode]]++;
                } else if (group[nextNode] === group[node]) {
                    console.log(-1);
                    process.exit(0); 
                }
            }
        }
        totalMin += Math.min(counts[0], counts[1]); 
    }
}

const answer = totalMin; 
console.log(answer);