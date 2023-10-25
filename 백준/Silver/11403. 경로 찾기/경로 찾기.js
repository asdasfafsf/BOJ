const fs = require('fs')


const [N, ...input] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const arr = input.map(elem => elem.split(' ').map(Number));
const graph = Array.from({length: +N + 1}, () => []);


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 1) {
            graph[i].push(j);
        }
    }
}


const bfs = start => {
    const queue = [start];
    let current = 0;
    const visited = Array.from({length: +N}, () => false);


    while (queue.length !== current) {
        const data = queue[current];
        
        for (const node of graph[data]) {
            if (visited[node] === false) {
                queue.push(node);
                visited[node] = true
                arr[start][node] = 1;
            }
        }

        current++;
    }
}


for (let i = 0; i < +N; i++) {
    bfs(i);
}

console.log(arr.map(elem => elem.join(' ')).join('\n'));