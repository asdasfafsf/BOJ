const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


let line = 0;
const N = +input[line++];
const graph = Array.from({length: N + 1}, () => []);

for (let i = 1; i < input.length; i++) {
    const nodes = input[i].split(' ').map(Number);

    for (let j = 1; j < nodes.length - 1; j+=2) {
        const node = nodes[j];
        const weight = nodes[j + 1];
        graph[nodes[0]].push([node, weight]);      
    }
}


const visited = Array.from({length: N + 1}, () => false);

let targetNode = 0;
let targetValue = 0;

const dfs = (start, depth, dist) => {
    if (dist > targetValue) {
        targetNode = start
        targetValue = dist;
    }

    for (const [node, weight] of graph[start]) {
        if (visited[node] === false) {
            visited[node] = true;
            dfs(node, depth + 1, dist + weight);
            visited[node] = false;
        }
    }


    return;
}


visited[1] = true;
dfs(1, 0, 0);
visited[1] = false;


visited[targetNode] = true;
dfs(targetNode, 0, 0)
visited[targetNode] = false;

console.log(targetValue)
