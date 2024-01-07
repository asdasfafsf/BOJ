const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const answer = [];
const calDist = (x1, x2, y1, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

let current = 0;
let T = input[current];

while(T--) {
    let n = +input[++current];
    const [homeX, homeY] = input[++current].split(' ').map(Number);
    const stores = [];

    for (let i = 0; i < n; i++) {
        const [storeX, storeY] = input[++current].split(' ').map(Number)
        stores.push([storeX, storeY]);
    }
    const [festivalX, festivalY] = input[++current].split(' ').map(Number);
    const nodes = [[homeX, homeY], ...stores, [festivalX, festivalY]];
    const dists = Array.from({length: n + 2}, () => Array.from({length: n + 2}, () => Infinity))
    
    
    const queue = [[homeX, homeY, 0, 0]];
    dists[0][0] = 0;
    let queueIndex = 0;
    let result = 'sad';
    
    while (queue.length !== queueIndex) {
        const [x, y, index, weight] = queue[queueIndex];
        if (x === festivalX && y === festivalY) {
            result = 'happy';
            break;
        }

        for (let i = 0; i < nodes.length; i++) {
            const [nx, ny] = nodes[i];
            const nIndex = i;

            const dist = calDist(x, nx, y, ny);
            if (dist <= 1000 && dists[index][nIndex] > weight + 1) {
                dists[index][nIndex] = weight + 1;
                queue.push([nx, ny, nIndex, weight + 1]);
            }
        }

        queueIndex++;
    }

    answer.push(result);
}

console.log(answer.join('\n'));
