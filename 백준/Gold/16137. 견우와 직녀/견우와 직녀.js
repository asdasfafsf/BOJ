const input = require('fs')
    .readFileSync(process.platform === 'linux' ?  0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);


const map = input.slice(1).map(elem => elem.split(' ').map(Number));
const cross = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const canOjakgyoList = [];

// 1 0  =>  0, 1   -1, 0
// 0 1  =>  1, 0   -1, 0
//-1 0  =>  


const canAccess = (y, x) => (y < N && y >= 0 && x < N && x >= 0);

// 오작교를 놓을 수 있는 위치 찾기
for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
        if (map[y][x] !== 0) {
            continue;
        }
        let isCross = false;
        for (let i = 0; i < cross.length; i++) {
            const [dy, dx] = cross[i];
            const [ny, nx] = [dy + y, dx + x];

            if (!canAccess(ny, nx)) {
                continue;
            }

            if (map[ny][nx] === 0) {
                const [pdy, pdx] = cross[(i + 3) % 4]
                const [ndy, ndx] = cross[(i + 1) % 4]

                const [pny, pnx] = [pdy + y, pdx + x];
                const [nny, nnx] = [ndy + y, ndx + x];

                isCross = ((canAccess(pny, pnx) && map[pny][pnx] === 0)
                    || (canAccess(nny, nnx) && map[nny][nnx] === 0))
            }

            if (isCross) {
                break;
            }
        }

        if (!isCross) {
            canOjakgyoList.push([y, x]);
        }
    }
}


let answer = Infinity;
const dp = cross;
// 오작교를 놓을 수 있는 위치를 모두 탐색
for (const [oy, ox] of canOjakgyoList) {
    map[oy][ox] = M;

    const queue = [[0, 0, 0]];
    const visited = Array.from(Array(N), () => Array(N).fill(Infinity))
    visited[0][0] = 0;
    let current = 0;


    while (queue.length !== current) {
        const [y, x, t] = queue[current];
        const nt = t + 1;

        if (y === N - 1 && x === N - 1) {
            answer = Math.min(answer, t);
        }

        for (const [dy, dx] of dp) {
            const [ny, nx] = [dy + y, dx + x];

            if (!canAccess(ny, nx) || map[ny][nx] === 0) {
                continue;
            }

            if (map[ny][nx] > 1) {
                const div = Math.floor((nt - 0.1) / map[ny][nx]);
                const time = map[ny][nx] * (div + 1);

                if (visited[ny][nx] > time && ((map[y][x] > 1 && t + 1 !== nt) || map[y][x] === 1)) {
                    visited[ny][nx] = time;
                    queue.push([ny, nx, time]);
                    continue;
                }
            } else if (map[ny][nx] === 1 && visited[ny][nx] > nt) {
                queue.push([ny, nx, nt]);
                visited[ny][nx] = nt;
            }

        }

        current++;
    }
    map[oy][ox] = 0;
}

console.log(answer)
