const [[N, M], ...map] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));




const dp = [[1, 0], [0, 1], [0, -1], [-1, 0]]

let answer = 99999999;
const recursion = (start, depth, viruses) => {
    if (depth === M) {
        const newMap = map.map(elem => [...elem]);
        const queue = [...viruses];
        let current = 0;
        let value = 0;

        while (queue.length !== current) {
            const [cy, cx, cw] = queue[current];

            if (cw > answer) {
                break;
            }

            value = Math.max(value, cw);
            const nw = cw + 1;


            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + cy, dx + cx];

                if (ny < 0 || ny >= N || nx < 0 || nx >= N || (newMap[ny][nx] !== 2 && newMap[ny][nx] !== 0)) {
                    continue;
                }
                newMap[ny][nx] = 3;
                queue.push([ny, nx, nw]);
            }
            current++;
        }

        if (typeof newMap.flat().find(elem => elem === 2 || elem === 0) === 'undefined') {
            answer = Math.min(value, answer)
        }
    }


    for (let i = start; i < Math.pow(N, 2); i++) {
        const x = i % N;
        const y = Math.floor(i / N);

        if (map[y][x] === 2) {
            map[y][x] = 3;
            viruses.push([y, x, 0]);
            recursion(i + 1, depth + 1, viruses);
            viruses.pop();
            map[y][x] = 2;
        }
    }
}

recursion(0, 0, []);
console.log(answer === 99999999 ? '-1' : answer);