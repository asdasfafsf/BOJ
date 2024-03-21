const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .split('\n');



const dfs = (graph, visited, finish, node) => {
    if (visited[node]) {
        if (finish[node] === false) {
            return;
        }
    }

    visited[node] = true;

    for (const nextNode of graph[node]) {
        dfs(graph, visited, finish, nextNode);
    }

    finish[node] = true;
}

const answer = [];

for (let i = 0; i < input.length; i++) {
    let result = 0;
    const num = +input[i];
    const map = {};
    let count = -1

    i++;

    const graph = Array.from(Array(num * 2), () => []);

    for (let j = i; j < (i + num); j++) {
        const [s1, s2] = input[j].split(' ').map(elem => elem.trim())

        if (typeof map[s1] === 'undefined') {
            map[s1] = ++count;
        }

        if (typeof map[s2] === 'undefined') {
            map[s2] = ++count;
        }
        graph[map[s1]].push(map[s2]);
    }

    i += num - 1;
    const visited = Array.from(Array(count), () => false);
    const path = Array.from(Array(count), () => false);
    const nodes = Object
        .entries(map)
        .map(([key, value]) => value);

    

    for (const node of nodes) {
        if (visited[node] === false) {
            result++;
            dfs(graph, visited, path, node);
        }
    }

    answer.push(`${answer.length + 1} ${result}`);
   
    if (input[i + 1] == '0') {
        console.log(answer.join('\n'))
        break;
    }
}