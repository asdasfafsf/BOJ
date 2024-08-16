const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')


const [N, M] = input[0].split(' ').map(Number);


const A = input.slice(1, N + 1).map(elem => elem.split(''));
const B = input.slice(N + 1, input.length).map(elem => elem.split(''));

const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]]



const getArea = (map) => {
    const visited = Array.from(Array(N), () => Array(M).fill(false)); 
    const area = [];
    for (let y = 0; y < N; y++) {
        for(let x = 0; x < M; x++) {
            if (visited[y][x]) {
                continue;
            }

            visited[y][x] = true;
            const queue = [[y, x]];
            let current = 0;
    
            while (queue.length !== current) {
                const [cy, cx] = queue[current];
    
                for (const [dy, dx] of dp) {
                    const [ny, nx] = [dy + cy, dx + cx];
    
                    if (ny >= N || ny < 0 || nx >= M || nx < 0 || visited[ny][nx]) {
                        continue;
                    }
    
                    if (map[cy][cx] === map[ny][nx]) {
                        queue.push([ny, nx]);
                        visited[ny][nx] = true;;
                    }
                }
    
                current++;
            }

            if (queue.length) {
                const map = new Map();
                for (const [y, x] of queue) {
                    map.set(`${y},${x}`, true);
                }
                area.push(map);
            }
        }
    }

    return area;
}

const areaA = getArea(A);


const visited = Array.from(Array(N), () => Array(M).fill(false)); 

for (let y = 0; y < N; y++) {
    for(let x = 0; x < M; x++) {
        if (visited[y][x]) {
            continue;
        }

        visited[y][x] = true;
        const queue = [[y, x]];
        let current = 0;

        while (queue.length !== current) {
            const [cy, cx] = queue[current];

            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + cy, dx + cx];

                if (ny >= N || ny < 0 || nx >= M || nx < 0 || visited[ny][nx]) {
                    continue;
                }

                if (B[cy][cx] === B[ny][nx]) {
                    queue.push([ny, nx]);
                    visited[ny][nx] = true;;
                }
            }

            current++;
        }


        for (const aMap of areaA) {
            let isDeleted = false;

            for (const [y, x] of queue) {
                if (aMap.has(`${y},${x}`)) {
                    aMap.delete(`${y},${x}`);
                    isDeleted = true;
                }
            }

            if (isDeleted && aMap.size !== 0) {
                console.log('NO');
                process.exit(0);
            }
        }        
    }
}
// console.log(areaA)

console.log('YES')