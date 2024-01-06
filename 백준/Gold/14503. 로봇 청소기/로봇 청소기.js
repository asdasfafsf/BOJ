const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const [r, c, d] = input[1].split(' ').map(Number);
const room = input.slice(2).map(elem => elem.split(' ').map(Number));


const WALL = 1;
const DIRTY = 0;
const CLEAN = 2;
const dp = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const isCleanable = (y, x, room) => {
    if (y < 0 || y >= N || x < 0 || x >= M) {
        return false;
    }

    return room[y][x] === DIRTY;
} 

let y = r;
let x = c;
let direction = d;
let count = 0;
while (true) {
    if (isCleanable(y, x, room)) {
        room[y][x] = CLEAN;
        count++;
    }

    let canClean = false;
    for (let i = 0; i < dp.length; i++) {
        const [dy, dx] = dp[i];
        const [ty, tx] = [dy + y, dx + x];
        if (isCleanable(ty, tx, room)) {
            canClean = true;
            break;
        }
    }

    if (canClean) {
        for (let i = 0; i < dp.length; i++) {
            direction = (direction + 3) % 4;
            const [dy, dx] = dp[direction];
            const [ty, tx] = [dy + y, dx + x];

            if (isCleanable(ty, tx, room)) {
                y = ty;
                x = tx;
                break;
            }
        }
    } else {
        const [dy, dx] = dp[direction];
        const [by, bx] = [y - dy, x - dx];

        if (room[by][bx] === WALL) {
            break;
        } else {
            y = by;
            x = bx;
        }
    }
}

console.log(count)