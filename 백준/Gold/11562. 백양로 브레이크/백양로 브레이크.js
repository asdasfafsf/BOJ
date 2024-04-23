const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


let index = 0;
const [N, M] = input[0].split(' ').map(Number);
const dist =  Array.from(Array(N), () => Array(N).fill(Infinity));

for (let i = 0; i < M; i++) {
    const [s, e, d] = input[++index].split(' ').map(elem => elem - 1);

    if (d === 0) {
        dist[e][s] = 0;
    } else {
        dist[e][s] = 1;
    }
    dist[s][e] = 0;
}

for (let i = 0; i < dist.length; i++) {
    dist[i][i] = 0;
}


for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
            dist[j][k] = Math.min(dist[j][i] + dist[i][k], dist[j][k]);
        }
    }
}


const K = +input[++index];
const answer = [];

for (let i = ++index; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(elem => elem - 1);
    answer.push(dist[s][e])

}

console.log(answer.join('\n'))