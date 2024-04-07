const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const counts = input.slice(1).map(elem => elem.split(' ').map(e => e - 1));
const dist = Array.from(Array(N), () => Array(N).fill(Infinity));

for (const [small, big] of counts) {
    dist[big][small] = 1;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
            dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
        }
    }

}

let answer = 0;

for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
        if (dist[i][j] !== Infinity || dist[j][i] !== Infinity) {
            count++;
        }
    }

    if (count === N - 1) {
        answer++;
    }
}

console.log(answer);