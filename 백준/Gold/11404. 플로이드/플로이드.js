

const fs = require('fs')


const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

const n = +input[0];
const m = +input[1];

const dist = Array.from({length: n}, () => Array.from({length: n}, () => Infinity));

for (let i = 2; i < input.length; i++) {
    const [start, end, weight] = input[i].split(' ').map(Number);

    dist[start - 1][end - 1] = Math.min(weight, dist[start - 1][end - 1]);
}

for (let i = 0; i < dist.length; i++) {
    dist[i][i] = 0;
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
        }
    }
}

const answer = dist.map(elem => {
    return elem.map(elemElem => {
        return elemElem === Infinity ? 0 : elemElem
    }).join(' ');
}).join('\n');

console.log(answer)