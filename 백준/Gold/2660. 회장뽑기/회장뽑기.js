const [[N], ...nodes] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .slice(0, -1)
    .map(elem => elem.split(' ').map(Number));

const dist = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));

for (const [a, b] of nodes) {
    dist[a][b] = 1;
    dist[b][a] = 1;
}

for (let i = 1; i <= N; i++) { 
    dist[0][i] = 0;
    dist[i][i] = 0;
    dist[i][0] = 0;
}

for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
                dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
}

const scores = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
    scores[i] = Math.max(...dist[i]);
}

const minScore = Math.min(...scores.slice(1));
const answer = [];
for (let i = 1; i <= N; i++) {
    if (scores[i] === minScore) {
        answer.push(i);
    }
}
console.log(minScore + ' ' + answer.length);
console.log(answer.join(' '));