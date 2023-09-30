
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')
               

const T = +input.at(0);

const recursion = (y, x, visited, graph) => {
    if (visited[y][x] === false && graph[y][x] === 1) {
        visited[y][x] = true;
        recursion(y + 1, x, visited, graph);
        recursion(y - 1, x, visited, graph);
        recursion(y, x + 1, visited, graph);
        recursion(y, x - 1, visited, graph);
    }

}

let current = 0;
for(let i = 0; i < T; i++) {
    current++;
    const [M, N, K] = input.at(current).split(' ').map(Number);
    current++;
    const arr = input.slice(current, K + current)
        .map(elem => elem.split(' ').map(Number));
    current += K - 1;


    const graph = Array.from({length: N + 2})
        .map(elem => new Array(M + 2).fill(0));

    arr.forEach(([x, y]) => {
        graph[y + 1][x + 1] = 1;
    })

    const visited = Array.from({length: N + 2})
        .map(elem => new Array(M + 2).fill(false));

    let counter = 0;
    for (let r = 1; r <= N; r++) {
        for (let c = 1; c <= M; c++) {
            if (visited[r][c] === false && graph[r][c] === 1) {
                counter++;
                recursion(r, c, visited, graph)
            }
        }
    }

    console.log(counter)
}



