const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n');


const [R, C, T] = input[0].split(' ').map(Number);
const room1 = input.slice(1).map(elem => elem.split(' ').map(Number));
const room2 = [...room1.map(elem => elem.map(elem => elem === -1 ? elem : 0))];
const rooms = [room1, room2];

let [y1, y2, x1, x2] = [0, 0, 0, 0];

for (let i = 0; i < room1.length; i++) {
    for (let j = 0; j < room1[i].length; j++) {
        if (room1[i][j] === -1) {
            if (y1 === 0) {
                [y1, x1] = [i, j]
            } else {
                [y2, x2] = [i, j];
            }
        }
    }
}


const dp = [[1, 0], [-1, 0], [0, 1], [0, -1]];

for (let t = 0; t < T; t++) {
    const room = rooms[t % 2];
    const targetRoom = rooms[(t + 1) % 2];

    // 확산
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let dust = room[i][j];

            if (dust < 1) {
                continue;
            }

            const dividedDust = Math.floor(dust / 5);

            for (const [dy, dx] of dp) {
                const [ty, tx] = [dy + i, dx + j];

                if (tx < 0 || tx >= C || ty < 0 || ty >= R) {
                    continue;
                }

                if (room[ty][tx] === -1) {
                    continue;
                }

                targetRoom[ty][tx] += dividedDust;
                dust -= dividedDust;
            }

            targetRoom[i][j] += dust;
            room[i][j] = 0;   
        }
    }
    // 밀어내기 상단부
    for (let i = x1 - 1; i > 0; i--) {
        targetRoom[y1][i] = targetRoom[y1][i - 1];
    }
    for (let i = y1 - 1; i > 0; i--) {
        targetRoom[i][0] = targetRoom[i - 1][0]
    }
    for (let i = 0; i < C - 1; i++) {
        targetRoom[0][i] = targetRoom[0][i + 1];
    }
    for (let i = 0; i < y1; i++) {
        targetRoom[i][C - 1] = targetRoom[i + 1][C - 1];
    }
    for (let i = C - 1; i > x1 + 1; i--) {
        targetRoom[y1][i] = targetRoom[y1][i - 1];
    }

    if (x1 + 1 > -1 && x1 + 1 < R) {
        targetRoom[y1][x1 + 1] = 0;
    }


    // 밀어내기 하단부
    for (let i = x2 - 1; i > 0; i--) {
        targetRoom[y2][i] = targetRoom[y2][i - 1];
    }
    for (let i = y2 + 2; i < R; i++) {
        targetRoom[i - 1][0] = targetRoom[i][0]
    }
    for (let i = 0; i < C - 1; i++) {
        targetRoom[R - 1][i] = targetRoom[R - 1][i + 1];
    }
    for (let i = R - 1; i > y2; i--) {
        targetRoom[i][C - 1] = targetRoom[i - 1][C - 1];
    }
    for (let i = C - 1; i > x2 + 1; i--) {
        targetRoom[y2][i] = targetRoom[y2][i - 1]
    }

    if (x2 + 1 > -1 && x2 + 1 < R) {
        targetRoom[y2][x2 + 1] = 0;
    }
}


const targetRoom = rooms[T % 2];
const sum = targetRoom.reduce((pv, cv) => pv + cv.reduce((ppv, ccv) => ppv + ccv, 0), 0) + 2;
console.log(sum);