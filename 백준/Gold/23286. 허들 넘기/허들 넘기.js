const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [N, M, T] = input[0].split(' ').map(Number);

const dist = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= M; i++) {
    const [u, v, h] = input[i].split(' ').map(Number);

    if (dist[u][v] > h) {
        dist[u][v] = h;
    }
}

for (let i = 0; i <= N; i++) {
    dist[N][N] = 0;
}


for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        for (let k = 1; k <= N; k++) {


            if (dist[j][k] > dist[j][i] && dist[j][k] > dist[i][k]) {
                dist[j][k] = Math.max(dist[j][i], dist[i][k])
            }

        }
    }
}

const answer = [];
for (let i = M + 1; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(Number);

    answer.push(dist[s][e] === Infinity ? -1 : dist[s][e])
}

console.log(answer.join('\n'))