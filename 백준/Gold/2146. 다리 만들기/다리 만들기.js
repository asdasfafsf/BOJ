const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


    
const N = +input[0];
const map = [];

for (let i = 1; i < input.length; i++) {
    map.push(input[i].split(' ').map(Number));
}

const areas = [];

const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const visited = Array.from(Array(N), () => Array(N).fill(false));

let areaNum = 0;
for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
        if (visited[y][x] || map[y][x] === 0) {
            continue;
        }

        areaNum++;
        const queue = [[y, x]];
        visited[y][x] = true;
        map[y][x] = areaNum;
        let current = 0;

        while (queue.length !== current) {
            const [cy, cx] = queue[current];

            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + cy, dx + cx];

                if (ny >= N || ny < 0 || nx >= N || nx < 0 || visited[ny][nx] === true || map[ny][nx] === 0) {
                    continue;
                }

                queue.push([ny, nx]);
                visited[ny][nx] = true;
                map[ny][nx] = areaNum;
            }

            current++;
        }

        areas.push(queue);
    }
}


const edgeAreas = areas.map(area => area.filter(([y, x]) => {
    let canConnect = false;
    for (const [dy, dx] of dp) {
        const [ny, nx] = [dy + y, dx + x];

        if (ny >= N || ny < 0 || nx >= N || nx < 0) {
            continue;
        }

        if (map[ny][nx] === 0) {
            canConnect = true;
            break;
        }
    }

    return canConnect
}))
// console.log(map.map(elem => elem.join(' ')).join('\n'))
let answer = Infinity;

for (const edgeArea of edgeAreas) {
    // console.log('area----')
    const queue =  edgeArea.map(elem => [...elem, 0]);
    const dist = Array.from(Array(N), () => Array(N).fill(Infinity));

    queue.forEach(([y, x]) => dist[y][x] = 0);

    const startArea = map[queue[0][0]][queue[0][1]];

    let current = 0;

    while (queue.length !== current) {
        const [cy, cx, cd] = queue[current];
        const nd = cd + 1;

        if (dist[cy][cx] < cd || answer < nd) {
            current++;
            continue;
        }

        
        for (const [dy, dx] of dp) {
            const [ny, nx] = [dy + cy, dx + cx];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
                continue;
            }


            if (dist[ny][nx] > nd) {
                dist[ny][nx] = nd;
                if (map[ny][nx] !== 0 && map[ny][nx] !== startArea) {
                    // console.log(`dist : ${ny} ${nx} map ${map[ny][nx]} startArea : ${startArea}`)
                    answer = Math.min(answer, nd);
                    break;
                }

                queue.push([ny, nx, nd]);
            }

        }
        current++
    }

}

console.log(answer - 1)