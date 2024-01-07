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


    if (node === K) {
        if (time === times[node]) {
            count++;
        } else if (time < times[node]){
            count = 1;
        }

        current++;
        continue;
    }

    const nextTime = time + 1;
    for (const nextNode of [node + 1, node - 1, node * 2]) {
        if (times[nextNode] >= nextTime) {
            times[nextNode] = nextTime;
            queue.push([nextNode, nextTime]);
        }
    }

    current++;
}

console.log(times[K]);
console.log(count);

