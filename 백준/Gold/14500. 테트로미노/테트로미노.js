const fs = require('fs')


const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));
const visited = arr.map(elem => elem.map(elemElem => false));


const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const canVisit = (y, x) => y > -1 && y < N && x > -1 && x < M;

let max = 0;
const dfs = (depth, y, x, current) => {
    if (depth === 4) {
        max = Math.max(current, max);
        return;
    }

    for (let i = 0; i < dp.length; i++) {
        const [dy, dx] = dp[i];
        const [cy, cx] = [dy + y, dx + x];

        if (canVisit(cy, cx) && visited[cy][cx] === false) {
            visited[cy][cx] = true;
            dfs(depth + 1, cy, cx, current + arr[cy][cx]);
            visited[cy][cx] = false;
        }
    }
}

const bfs = (i, j) => {
    const val = arr[i][j];

    const [y0, x0] = [dp[0][0] + i, dp[0][1] + j];
    const [y1, x1] = [dp[1][0] + i, dp[1][1] + j];
    const [y2, x2] = [dp[2][0] + i, dp[2][1] + j];
    const [y3, x3] = [dp[3][0] + i, dp[3][1] + j];

    const canVisits = [
        canVisit(y0, x0),
        canVisit(y1, x1),
        canVisit(y2, x2),
        canVisit(y3, x3)
    ]

    if (canVisits[0] && canVisits[1] && canVisits[2]) {
        max = Math.max(
            max, val + arr[y0][x0] + arr[y1][x1] + arr[y2][x2]
        )
    }

    if (canVisits[1] && canVisits[2] && canVisits[3]) {
        max = Math.max(
            max, val + arr[y1][x1] + arr[y2][x2] + arr[y3][x3]
        )
    }

    if (canVisits[2] && canVisits[3] && canVisits[0]) {
        max = Math.max(
            max, val + arr[y2][x2] + arr[y3][x3]+ arr[y0][x0]
        )
    }

    if (canVisits[3] && canVisits[0] && canVisits[1]) {
        max = Math.max(
            max, val+ arr[y3][x3]+ arr[y0][x0] + arr[y1][x1] 
        )
    }
}



for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        visited[i][j] = true;
        dfs(1, i, j, arr[i][j]);
        visited[i][j] = false;
        bfs(i, j)
    }
}

console.log(max)