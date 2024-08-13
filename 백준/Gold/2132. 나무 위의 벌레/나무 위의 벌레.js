const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = 10001;
const fruits = input[1].split(' ').map(Number);
const visited = Array.from({ length: N }, () => false);

const graph = Array.from(Array(N), () => []);
for (let i = 2; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(Number).map(elem => elem - 1);
    graph[s].push(e);
    graph[e].push(s);
}

let targetNode = 0;
let targetValue = 0;

const dfs = (start, dist) => {
    if (dist > targetValue) {
        targetNode = start;
        targetValue = dist;
    } else if (dist === targetValue) {
        targetNode = Math.min(start, targetNode);
    }

    for (const node of graph[start]) {
        if (!visited[node]) {
            visited[node] = true;
            dfs(node, dist + fruits[node]);
            visited[node] = false;
        }
    }
};

visited[0] = true;
dfs(0, fruits[0]);

let firstTargetNode = targetNode;
let firstTargetValue = targetValue;

targetNode = firstTargetNode;
targetValue = 0;
visited.fill(false);
visited[firstTargetNode] = true;
dfs(firstTargetNode, fruits[firstTargetNode]);

let secondTargetNode = targetNode;
let secondTargetValue = targetValue;


if (secondTargetValue > firstTargetValue) {
    console.log(secondTargetValue, Math.min(secondTargetNode, firstTargetNode, targetNode) + 1);
} else if (secondTargetValue === firstTargetValue) {
    console.log(secondTargetValue, Math.min(0, firstTargetNode) + 1);
} else {
    console.log(firstTargetValue, 1);
}