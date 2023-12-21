const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');



const N = +input[0];

const graph = Array.from({length: N + 1}, () => [])

for (let i = 1; i < input.length; i++) {
    const [p, c, w] = input[i].split(' ').map(Number);
    graph[p].push([c, w]);
    graph[c].push([p, w])
}


let answer = 0;
let point = 0;

const visited = Array.from({length: N + 1}, () => false);

const recursion = (current, depth, value) => {
    if (answer < value) {
        point = current;
        answer = value;
    }

    for (const [nextNode, nextWeight] of graph[current]) {
        if (visited[nextNode] === false) {
            visited[nextNode] = true;
            recursion(nextNode, depth + 1, value + nextWeight);
            visited[nextNode] = false;
        }
    }
}

visited[1] = true;
recursion(1, 0, 0);
visited[1] = false;

visited[point] = true;
recursion(point, 0, 0);
visited[point] = false;

console.log(answer)