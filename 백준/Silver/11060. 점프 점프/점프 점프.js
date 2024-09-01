const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const A = input[1].split(' ').map(Number);



const visited = Array(N).fill(Infinity);

const queue = [[0, 0]];
visited[0] = 0;
let current = 0;

while (queue.length !== current) {
    const [start, dist] = queue[current];
    const nextDist = dist + 1;
 
    const end = start + A[start];

    for (let i = start + 1; i <= end; i++) {
        if (visited[i] > nextDist) {
            visited[i] = nextDist;
            queue.push([i, nextDist]);
        }
    }

    current++;
}


if (visited.at(-1) === Infinity) {
    console.log(-1)
} else {
    console.log(visited.at(-1))
}