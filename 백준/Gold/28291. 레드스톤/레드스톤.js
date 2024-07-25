const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [X, Y] = input[0].split(' ').map(Number);
const N = +input[1];


const NONE = 0;
const BLOCK = 1;
const DUST = 2;
const LAMP = 3;


const brights = Array.from(Array(Y + 1), () => Array(X + 1).fill(0));
const map = Array.from(Array(Y + 1), () => Array(X + 1).fill(NONE));

const queue = []
const lamps = [];
for (let i = 2; i < input.length; i++) {
    const [name, x, y] = input[i].split(' ');
    const [ny, nx] = [+y, +x];

    if (name === 'redstone_block') {
        queue.push([ny, nx, 15]);
        brights[ny][nx] = 15;
        map[ny][nx] = BLOCK;
    } else if (name === 'redstone_dust') {
        map[ny][nx] = DUST;
    } else if (name === 'redstone_lamp') {
        map[ny][nx] = LAMP;
        lamps.push([ny, nx]);
    }
}


const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let current = 0;
while (queue.length !== current) {
    const [y, x, weight] = queue[current];
    const newWeight = map[y][x] === DUST ? weight - 1 : weight;

    if (newWeight < 1) {
        current++;
        continue;
    }


    for (const [dy, dx] of dp) {
        const [ny, nx]  = [dy + y, dx + x];
        if (ny < 0 || ny >= Y || nx < 0 || nx >= X) {
            continue;
        }

        if (map[ny][nx] === NONE) {
            continue;
        }

        if (newWeight > brights[ny][nx]) {
            brights[ny][nx] = newWeight;

            if (map[ny][nx] !== LAMP) {
                queue.push([ny, nx, newWeight]);
            }
        }
    }

    current++;
}


const answer = lamps.some(([y, x]) => brights[y][x] === 0) ? 'failed' : 'success';
console.log(answer)