const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const [N, M] = input[0];
const square = [];
for (let i = 1; i <= N; i++) {
    square.push(input[i]);
}
const [H, W, SR, SC, FR, FC] = input[N + 1];


const sy = SR - 1;
const sx = SC - 1;
const destY = FR - 1;
const destX = FC - 1;


const isOver = (ty, tx) => {
    const [sy, sx, ey, ex] = [ty, tx, ty + H - 1, tx + W - 1];
    // console.log(sy, sx, ey, ex)

    if (sy >= N || sy < 0 || sx >= M || sx < 0 || ey >= N || ey < 0 || ex >= M || ex < 0) {
        return true;
    }

    return false;
}


const canMove = (ty, tx, d) => {
    const [sy, sx, ey, ex] = [ty, tx, ty + H - 1, tx + W - 1];


    if (d === 0) {
        for (let x = sx; x <= ex; x++) {
            if (square[ey][x]) {
                return false;
            }
        }
    } else if (d === 1) {
        for (let y = sy; y <= ey; y++) {
            if (square[y][ex]) {
                return false;
            }
        }    
    } else if (d === 2) {
        for (let x = sx; x <= ex; x++) {
            if (square[sy][x]) {
                return false;
            }
        } 
    } else if (d === 3) {
        for (let y = sy; y <= ey; y++) {
            if (square[y][sx]) {
                return false;
            }
        }   
    }



    return true;
}

const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const dist = square.map(elem => elem.map(elem => Infinity));

const queue = [[sy, sx, 0]]
let current = 0;
dist[sy][sx] = 0;

while (queue.length !== current) {
    const [cy, cx, cd] = queue[current];

    const nd = cd + 1;
    for (let d = 0; d < dp.length; d++) {
        const [dy, dx] = dp[d];
        const [ny, nx] = [dy + cy, dx + cx];
       
        if (isOver(ny, nx) 
        || dist[ny][nx] <= nd
        || !canMove(ny, nx, d) 
        ) {
            continue;
        }
        
        queue.push([ny, nx, nd])
        dist[ny][nx] = nd;
    }

    current++;
}

// console.log(dist)
const answer = dist[destY][destX] === Infinity ? -1 : dist[destY][destX];
console.log(answer)