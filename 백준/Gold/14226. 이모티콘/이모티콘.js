const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const S = +input;


const queue = [[1, 0, 0]];
const dist = Array.from({length: 1001}, () => Array(1001).fill(Infinity));
dist[0][0] = 1;
dist[1][0] = 1;
let current = 0;


while (queue.length !== current) {
    const [count, time, clipboard] = queue[current];

    for (const [dCount, dTime, dClipboard] of [
        [count, time + 1, count],
        [count + clipboard, time + 1, clipboard],
        [count - 1, time + 1, clipboard]
    ]) {

        if (dCount < 0 || dCount > 1000) {
            continue;
        }

        if (dist[dCount][dClipboard] <= dTime) {
            continue;
        }
        dist[dCount][dClipboard] = dTime;
        queue.push([dCount, dTime, dClipboard]);
    }

    current++;
}


console.log(Math.min(...dist[S]));
// console.log(queue)
