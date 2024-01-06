const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const n = +input[0];
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));
const dist = Array.from({length: n}, () => Array.from({length: n}, () => Infinity))
const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];


const shark = {
    y: '',
    x: '',
    power: 2,
    exp: 0

}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (arr[i][j] === 9) {
            shark.y = i;
            shark.x = j;
        }
    }
}

const initDist = () => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dist[i][j] = Infinity;
        }
    }
}


const updateDist = () => {
    const queue = [[shark.y, shark.x, 0]];
    dist[shark.y][shark.x] = 0;
    let current = 0;

    while (queue.length !== current) {
        const [cy, cx, cw] = queue[current];

        for (const [dy, dx] of dp) {
            const [ty, tx] = [dy + cy, dx + cx];

            if (ty > -1 && ty < n && tx > -1 && tx < n) {
                if (arr[ty][tx] <= shark.power && dist[ty][tx] > cw + 1) {
                    dist[ty][tx] = cw + 1;
                    queue.push([ty, tx, cw + 1]);
                }
            }
        }

        current++;
    }
}

const getEatable = () => {
    let eatable = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] !== 0 && arr[i][j] != 9 && shark.power > arr[i][j] ) {
                eatable.push({
                    y: i,
                    x: j,
                    power: arr[i][j]
                })
            }
        }
    }

    return eatable;
}


const eat = fish => {
    const {y, x, power} = fish;
    arr[shark.y][shark.x] = 0;
    arr[y][x] = 9;

    shark.exp++;
    shark.y = y;
    shark.x = x;

    if (shark.exp === shark.power) {
        shark.power++;
        shark.exp = 0;
    }
}

let answer = 0;
while(true) {
    initDist();
    updateDist();
    const eatableFishes = getEatable();

    if (eatableFishes.length === 0) {
        break;
    }

    let minDist = 9999;
    let targetFishes = [];
    for (const fish of eatableFishes) {
        const {x, y, power} = fish;
        const curDist = dist[y][x];

        if (minDist > curDist) {
            targetFishes = [fish]
            minDist = curDist;
        } else if (minDist === curDist) {
            targetFishes.push(fish);
        }
    }

    if (targetFishes.length === 0) {
        break;
    }

    targetFishes.sort((fish1, fish2) => {
        if (fish1.y === fish2.y) {
            return fish1.x - fish2.x;
        }

        return fish1.y - fish2.y;
    })

    const targetFish = targetFishes[0];
    eat(targetFish);
    answer += dist[targetFish.y][targetFish.x];

}

// console.log(shark)

console.log(answer)
