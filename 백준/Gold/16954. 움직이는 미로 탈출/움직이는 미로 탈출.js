const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');



const map = input.map(elem => elem.split(''));

const dp = [[0, 0], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]];
const walls = [];

for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === '#') {
            walls.push([y, x]);
        }
    }
}

const moveWall = (walls) =>  walls.map(([y, x]) => [y + 1, x]).filter(([y, x]) => y < 8);
const movedWalls = [walls];


for (let i = 1; i <= 10; i++) {
    movedWalls.push(moveWall(movedWalls.at(-1)));
}

// console.log(movedWalls)

const movedMap = movedWalls.map(map => {
    const movedMap = Array.from(Array(8), () => Array(8).fill('.'))
    map.forEach(([y, x]) => movedMap[y][x] = '#');
    return movedMap
})


// y x round
const visited = Array.from(Array(8), () => Array.from(Array(8), () => Array(9).fill(false)));


const queue = [[7, 0, 0]]
let current = 0;
visited[7][0][0] = true;


while (queue.length !== current) {
    const [y, x, depth] = queue[current];
    const currentMap = movedMap[depth];
    const nextMap = movedMap[depth + 1];


    // console.log('현재 맵이에용~');
    // console.log(currentMap.map(elem => elem.join(' ')).join('\n'));
    // console.log('다음 맵이에용~')
    // console.log(nextMap.map(elem => elem.join(' ')).join('\n'));

    // console.log('\n')

    // 벽이 모두 움직일때까지 살아남았다면
    if (depth >= 8) {
        console.log(1);
        process.exit(0);
    }

    for (const [dy, dx] of dp) {
        const [ny, nx] = [dy + y, dx + x];

        if (ny < 0 || ny >= 8 || nx < 0 || nx >=8) {
            continue;
        }

        // console.log(ny, nx, depth + 1)
        // console.log(currentMap[ny][nx])
        // console.log(nextMap[ny][nx])

        if (currentMap[ny][nx] === '#' || nextMap[ny][nx] === '#') {
            continue;
        }


        // console.log(visited[ny][nx][depth + 1])

        if (visited[ny][nx][depth + 1]) {
            continue;
        }

        // 벽이 모두 움직일때까지 살아남았다면
        if (depth + 1 >= 8) {
            console.log(1);
            process.exit(0);
        }
        visited[ny][nx][depth + 1] = true;
        queue.push([ny, nx, depth + 1]);
    }

    current++;
}
// console.log(queue.length)
console.log(0);