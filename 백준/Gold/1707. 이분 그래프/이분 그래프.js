const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const T = +input.at(0)
let current = 1;

for (let i = 0; i < T; i++) {
    const [V, E] = input.at(current).split(' ').map(Number);
    current += 1;
    const arr = input.slice(current, current + E).map(elem => elem.split(' ').map(Number));
    const graph = Array.from({length: V + 1}).map(elem => []);
    arr.forEach(([start, end]) => {
        graph[start].push(end)
        graph[end].push(start);
    })

    current += E;
    const visited = new Array(V + 1).fill(0);

    const bfs = i => {
        let index = 0;
        let check = 1;

        const queue = [i];
        visited[i] = check;

        while (queue.length !== index) {
            const data = queue[index];

            if (visited[data] === 1) {
                check = 2;
            } else if (visited[data] === 2) {
                check = 1;
            }
            
            for (const node of graph[data]) {
                if (visited[node] === 0) {
                    visited[node] = check;
                    queue.push(node);
                } else if (visited[data] === visited[node]) {
                    break;
                }
            }
            index++;
        }
    }

    for (let i = 1; i <= V; i++) {
        if (!visited[i]) {
            bfs(i);
        }
    }
    
    const printResult = () => {
        for (let i = 1; i <= V; i++) {
            for (const node of graph[i]) {
                if (visited[node] === visited[i]) {
                    console.log('NO');
                    return;
                }
            }
        }
        console.log('YES');
    }

    printResult()
  
}


