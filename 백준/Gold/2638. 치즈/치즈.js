
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const cheeses = input.slice(1).map(elem => elem.split(' ').map(Number));


const cheesesList = [
    cheeses,
    cheeses.map(elem => elem.map(elem => elem))
]

const dp = [[1, 0], [-1, 0], [0, -1], [0, 1]];


const bfs = (y, x, arr, visited) => {
    const queue = [[y, x]];
    let current = 0;
    let isClosed = true;

    while (queue.length !== current) {
        const [y, x] = queue[current]; 

        if (y === 0 || x === 0 || y === N - 1 || x === M - 1) {
            isClosed = false;
            // break;
        }

        for (const [dy, dx] of dp) {
            const [ty, tx] = [y + dy, x + dx];
    
            if (ty > -1 && ty < N && tx > -1 && tx < M) {
                if (visited[ty][tx] === false && arr[ty][tx] === 0) {
                    queue.push([ty, tx]);
                    visited[ty][tx] = true;
                }
            }
        }

        current++;
    }

    if (isClosed) {
        for (const [y, x] of queue) {
            arr[y][x] = 2;
        }
    }
}


let answer = 0;
for (;; answer++) {
    const cheeses = cheesesList[answer % 2];
    const targetCheeses = cheesesList[(answer + 1) % 2];
    const visited = Array.from({length: N}, () => Array.from({length: M}, () => false))

    let isUpdated = false;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            const elem = cheeses[i][j];

            if (elem === 0) {
                targetCheeses[i][j] = elem;
            } else {
                let count = 0;
                for (const [dy, dx] of dp) {
                    const [ty, tx] = [i + dy, j + dx];

                    if (ty > -1 && ty < N && tx > -1 && tx < M) {
                        if (cheeses[ty][tx] === 0) {
                            if (visited[ty][tx] === false) {
                                visited[ty][tx] = true;
                                bfs(ty, tx, cheeses, visited);

                                if (cheeses[ty][tx] === 0) {
                                    count++;
                                }
                            } else {
                                count++;
                            }
                        }
                    }
                }

                if (count > 1) {
                    targetCheeses[i][j] = 0;
                    isUpdated = true;
                } else {
                    targetCheeses[i][j] = elem === 2 ? 0 : elem;
                }
            }
        }
    }

    if (!isUpdated) {
        break;
    }
}

console.log(answer)


