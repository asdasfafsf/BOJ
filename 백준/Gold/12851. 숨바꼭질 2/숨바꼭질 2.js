const [N, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);



const queue = [[N, 0]];
const times = Array.from({length: 1000001}, () => Infinity);
times[N] = 0;


let current = 0;
let count = 0;
while (queue.length !== current) {
    const [node, time] = queue[current];

    if (time > times[node]) {
        continue;
    }

    if (node === K) {
        count++;
    }

    for (const [nextNode, nextTime] of [[node * 2, time + 1],[node + 1, time + 1],[node - 1, time + 1]]) {
        if (times[nextNode] >= nextTime) {
            queue.push([nextNode, nextTime]);
            times[nextNode] = nextTime;
        }
    }

    current++;
}

console.log(times[K]);
console.log(count);
