const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');



let index = 0;

const [N, Q] = input[index].split(' ').map(Number);
const graph = Array.from({length: N + 1}, () => []);


for (let i = 0; i < N - 1; i++) {
    const [p, q, r] = input[++index].split(' ').map(Number);
    graph[p].push([q, r]);
    graph[q].push([p, r]);

}

const answer = [];
for (let i = 0; i < Q; i++) {
    const [k, v] = input[++index].split(' ').map(Number);

    const queue = [[v, k]];
    const visited = Array.from({length: N + 1}, () => false);
    visited[v] = true;
    let current = 0;

    while (queue.length !== current) {
        const [cv, ck] = queue[current];

        for (const [nv, nk] of graph[cv]) {
            const realNk = Math.min(nk, ck);

            if (visited[nv] === false && realNk >= k) {
                visited[nv] = true;
                queue.push([nv, realNk]);
            }
        }

        current++;
    }

    answer.push(current - 1);
}

console.log(answer.join('\n'));