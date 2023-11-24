const fs = require('fs')
const [A, B, N, M] = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const visited = Array.from({length: 100001}, () => Infinity);

const queue = [N];
visited[N] = 0;
let current = 0;

while (queue.length !== current) {
    const currentNode = queue[current];
    const depth = visited[currentNode] + 1;
    const nextNodeList = [
        currentNode - 1
        , currentNode + 1
        , currentNode + B
        , currentNode + A
        , currentNode - B
        , currentNode - A
        , currentNode * B
        , currentNode * A
    ];

    for (const nextNode of nextNodeList) {
        if (visited[nextNode] > depth) {
            visited[nextNode] = depth;
            queue.push(nextNode);
        }
    }

    current++;
}

console.log(visited[M])