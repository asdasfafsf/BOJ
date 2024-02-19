const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const N = Number(input[0]);
const graph = Array.from({length: N + 1}, () => []);
const visited = Array.from({length: N + 1}, () => false);

for (let i = 1; i < input.length; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

let distance = 0;

visited[1] = true;
const stack = [[0, 1]];

while (stack.length) {
    const [depth, node] = stack.pop();

    let isLeaf = true;

    for (const nextNode of graph[node]) {
        if (visited[nextNode] === false) {
            visited[nextNode] = true;

            if (graph[nextNode].length === 1) {
                distance += depth + 1;
            } else {
                stack.push([depth + 1, nextNode]);
            }
            isLeaf = false;
        }
    }

    if (isLeaf === true) {
        distance += depth;
    } 
}
console.log(distance % 2 === 0 ? 'No' : 'Yes')
