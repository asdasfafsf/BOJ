const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')


const [N, M] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);
const entries = heights
    .map((elem, index) => [index, elem])
    .sort((a, b) => b[1] - a[1]);

const paths = input
    .slice(2)
    .map(elem => elem.split(' ').map(elemElem => elemElem - 1));

const graph = Array.from({length: N}, () => []);

for (const [start, end] of paths) {
    if (heights[start] > heights[end]) {
        graph[start].push(end)
    } else if (heights[start] < heights[end]) {
        graph[end].push(start);
    }
}
const answer = Array.from({length: N}, () => 1);

for (const [node, height] of entries) {
    for (const nextNode of graph[node]) {
        answer[nextNode] = Math.max(answer[nextNode], answer[node] + 1);
    }
}


console.log(answer.join('\n'))