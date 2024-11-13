const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

let [N, K] = input[0].split(' ').map(Number);
K--;
const H = input[1].split(' ').map(Number);
const graph = Array.from(Array(N), () => []);

for (let i = 2; i < input.length; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u - 1].push(v - 1);
    graph[v - 1].push(u - 1);
}

const stack = [[K, -1, H[K]]];

while (stack.length) {
    const [node, parentNode, currentHeight] = stack.pop();

    for (const nextNode of graph[node]) {
        if (nextNode === parentNode) {
            continue;
        }

        if (H[nextNode] >= currentHeight) {
            console.log(1);
            process.exit(0);
        }

        const jump = currentHeight * 2 - H[nextNode];


        if (jump <= 1_000_000) {
            stack.push([nextNode, node, jump]);
        }
    }
}

console.log(0);