const fs = require('fs')
const [F, S, G, U, D] = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const queue = [[S, 0]];
const visited = Array.from({length: F + 1}, () => Infinity)
visited[S] = 0;

let current = 0;

while (current !== queue.length) {
    const [floor, count] = queue[current];

    for (const nextFloor of [floor + U, floor - D]) {
        if (nextFloor <= F && nextFloor >= 1 && visited[nextFloor] > count + 1) {
            visited[nextFloor] = count + 1;
            queue.push([nextFloor, count + 1])
        }
    }

    current++;
}

if (visited[G] === Infinity) {
    console.log('use the stairs')
 } else {
    console.log(visited[G])
 }