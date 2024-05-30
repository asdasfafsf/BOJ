const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M, X] = input[0].split(' ').map(Number);


const graph = Array.from(Array(N + 1), () => []);
const reversedGraph = Array.from(Array(N + 1), () => []);

const ind = Array(N + 1).fill(0);
const reversedInd = Array(N + 1).fill(0);


for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(' ').map(Number);

    graph[n1].push(n2);
    ind[n2]++;

    reversedGraph[n2].push(n1);
    reversedInd[n1]++;
}

const queue = [];
const reversedQueue = [];

for (let i = 1; i < ind.length; i++) {
    if (ind[i] === 0) {
        queue.push(i);
    }

    if (reversedInd[i] === 0) {
        reversedQueue.push(i);
    }
}


let current = 0;
let isFind = false;

let min = 1;
while (queue.length !== current && !isFind) {
    let currentIndex = queue.length;

    const node = queue[current];

    for (const nextNode of graph[node]) {
        ind[nextNode]--;

        if (ind[nextNode] === 0) {
            if (nextNode === X) {
                isFind = true;
                min = currentIndex + 1;
                break;
            }
            queue.push(nextNode);
        }
    }
    current++;
}


current = 0;
isFind = false;

let max = 1;
while (reversedQueue.length !== current && !isFind) {
    let currentIndex = reversedQueue.length;

    const node = reversedQueue[current];

    for (const nextNode of reversedGraph[node]) {
        reversedInd[nextNode]--;

        if (reversedInd[nextNode] === 0) {
            if (nextNode === X) {
                isFind = true;
                max = currentIndex + 1;
                break;
            }
            reversedQueue.push(nextNode);
        }
    }
    current++;
}

console.log(min , N - max + 1)


