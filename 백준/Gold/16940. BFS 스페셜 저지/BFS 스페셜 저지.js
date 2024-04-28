const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const dist = Array.from(Array(N + 1), () => Infinity);
const graph  = Array.from(Array(N + 1), () => []);
const orders = input.at(-1).split(' ').map(Number);

for (let i = 1; i < input.length - 1; i++) {
    const [s, e] = input[i].split(' ').map(Number);

    graph[s].push(e);
    graph[e].push(s);
}

const queue = [1];
dist[1] = 0;
let current = 0;
let answer = 1;

if (orders[0] !== 1) {
    answer = 0;
}

while (queue.length !== current && answer) {
    const currentNode = queue[current];
    let count = 0;

    for (const nextNode of graph[currentNode]) {
        if (dist[nextNode] === Infinity) {
            dist[nextNode] = dist[currentNode] + 1;
            count++;
        }
    }

    const queueLen = queue.length;

    for (let i = queueLen; i < queueLen + count && i < orders.length; i++) {
        if (dist[orders[i]] === Infinity) {
            answer = 0;
            break;
        }

        if (dist[orders[i]] !== dist[currentNode] + 1) {
            continue;
        }
        queue.push(orders[i]);
    }

    current++;
}


console.log(answer)

